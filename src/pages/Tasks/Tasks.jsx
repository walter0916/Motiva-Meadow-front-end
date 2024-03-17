// npm services 
import { useState, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'
import Lottie from 'react-lottie'

// services 
import * as taskService from '../../services/taskService'

// components 
import ToDoListForm from "../../components/ToDoListForm/ToDoListForm"
import ToDoList from '../../components/ToDoList/ToDoList'

// animation
import animationData from '../../../public/loading-animation.json'


const Tasks = (props) => {
  const [lists, setLists] = useState({})
  const [showForm, setShowForm] = useState(false)
  const [showArchived, setShowArchived] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsersLists = async () => {
      const data = await taskService.getUsersLists(props.user.profile)
      setLists(data)
      setLoading(false)
    }
    fetchUsersLists()
  }, [props.user])

  const handleAddList = async (listFormData) => {
    const newList = await taskService.createToDoList(props.user.profile, listFormData)
    setLists((prevLists) => [...prevLists, newList]) 
  }

  const handleAddTask = async (listId, taskFormData) => {
    const newTask = await taskService.addTask(listId, taskFormData)
    const listIndex = lists.findIndex((list) => list._id === listId)
    const updatedLists = [...lists]
    updatedLists[listIndex] = {
      ...updatedLists[listIndex],
      tasks: [...updatedLists[listIndex].tasks, newTask],
    }
    setLists(updatedLists)
  }

  const handleToggleTaskCompletion = async (taskId, todoListId, currentStatus) => {
    const formData = {
      completed: !currentStatus,
    }
    await taskService.updateTaskCompletion(taskId, todoListId, formData)
    const updatedLists = await taskService.getUsersLists(props.user.profile)
    setLists(updatedLists)
  }

  const handleTaskCompletion = async (taskId, todoListId, completed) => {
    if (completed) {
      await handleToggleTaskCompletion(taskId, todoListId, true)
    } else {
      await handleToggleTaskCompletion(taskId, todoListId, false)
    }
  }

  const handleDeleteTask = async (taskId, todoListId) => {
    await taskService.deleteTask(taskId, todoListId)
    const updatedLists = lists.map((list) => {
      if (list._id === todoListId) {
        const updatedTasks = list.tasks.filter((task) => task._id !== taskId)
        return { ...list, tasks: updatedTasks }
      }
      return list
    })
    setLists(updatedLists)
  }

  const handleToggleForm = () => {
    setShowForm(!showForm)
  }

  const handleDeleteList = async (todoListId) => {
    await taskService.deleteList(todoListId)
    const updatedLists = lists.filter((list) => list._id !== todoListId)
    setLists(updatedLists)
  }

  const handleArchiveList = async (todoListId) => {
    await taskService.archiveList(todoListId)
    const data = await taskService.getUsersLists(props.user.profile)
    setLists(data)
  }

  const handleToggleArchiveView = () => {
    setShowArchived(!showArchived);
  }

  const defaultOptions = {
    loop:true,
    autoplay:true,
    animationData:animationData,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  if (loading) {
    return (
      <div className="px-4 py-8 w-4/5 flex flex-col justify-center items-center bg-meadow-3rd bg-fixed bg-cover bg-center">
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    )
  }


  return (
    <div className="w-4/5 p-6 bg-meadow-3rd bg-cover bg-center bg-fixed h-screen">
      <div className="flex items-center mb-4 font-poppins">
        <h1 className="text-2xl font-bold mr-4">Task Lists</h1>
        {showForm ? (
          <FaMinus className="cursor-pointer text-2xl text-white hover:text-black" onClick={handleToggleForm} />
        ) : (
          <FaPlus className="cursor-pointer text-2xl text-white hover:text-black" onClick={handleToggleForm} />
        )}
      </div>
      {showForm && <ToDoListForm user={props.user} handleAddList={handleAddList} />}
        <button 
          className={`text-white font-poppins flex-no-shrink p-2 border-2 rounded font-semibold ml-2" ${showArchived ? 'bg-blue-500 hover:bg-blue-600' : 'bg-orange-500 hover:bg-orange-600 '}`}
          onClick={handleToggleArchiveView}
        >
          {showArchived ? 'View Active Lists' : 'View Archived Lists'}
        </button>
        <div className="flex justify-center mt-8 text-xl font-semibold text-gray-800">
        {lists.length ? (
          lists
            .filter((toDoList) => (showArchived ? toDoList.archived : !toDoList.archived))
            .map((toDoList) => (
              <ToDoList
                key={toDoList._id}
                toDoList={toDoList}
                handleAddTask={handleAddTask}
                handleTaskCompletion={handleTaskCompletion}
                handleDeleteTask={handleDeleteTask}
                handleDeleteList={handleDeleteList}
                handleArchiveList={handleArchiveList}
              />
            ))
        ) : (
          <div>Add A List</div>
        )}
      </div>
    </div>
  )
}

export default Tasks