// npm services 
import { useState, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'

// services 
import * as taskService from '../../services/taskService'

// components 
import ToDoListForm from "../../components/ToDoListForm/ToDoListForm"
import ToDoList from '../../components/ToDoList/ToDoList'

// css

const Tasks = (props) => {
  const [lists, setLists] = useState({})
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const fetchUsersLists = async () => {
      const data = await taskService.getUsersLists(props.user.profile)
      setLists(data)
    }
    fetchUsersLists()
  }, [props.user])

  const handleAddList = async (listFormData) => {
    const newList = await taskService.createToDoList(props.user.profile, listFormData)
    setLists(newList, ...lists) 
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


  return (
    <div className="w-3/4">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold mr-4">Task Lists</h1>
        <FaPlus className="cursor-pointer text-2xl text-green" onClick={handleToggleForm} />
      </div>
      {showForm && <ToDoListForm user={props.user} handleAddList={handleAddList} />}
      {lists.length ? (
        lists.map((toDoList) => (
          <ToDoList
            key={toDoList._id}
            toDoList={toDoList}
            handleAddTask={handleAddTask}
            handleTaskCompletion={handleTaskCompletion}
            handleDeleteTask={handleDeleteTask}
          />
        ))
      ) : (
        'Loading Lists'
      )}
    </div>
  )
}

export default Tasks