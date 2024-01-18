// npm services 
import { useState, useEffect } from 'react'

// services 
import * as taskService from '../../services/taskService'

// components 
import ToDoListForm from "../../components/ToDoListForm/ToDoListForm"
import ToDoList from '../../components/ToDoList/ToDoList'

// css

const Tasks = (props) => {
  const [lists, setLists] = useState({})

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

  return (
    <div className="w-3/4">
      Create To Do List
      <ToDoListForm user={props.user} handleAddList={handleAddList}/>
      {lists.length ? (lists.map((toDoList) => <ToDoList key={toDoList._id} toDoList={toDoList} handleAddTask={handleAddTask}/> )) : ('Loading Lists') }
    </div>
  )
}

export default Tasks