// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/toDos`

async function getUsersLists(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (error) {
    throw new Error(error)
  }
}

async function createToDoList(profileId, listFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/new`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(listFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function addTask(listId, taskFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${listId}/tasks`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(taskFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function updateTaskCompletion(taskId,todoListId, taskFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${taskId}/${todoListId}/completion`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(taskFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteTask(taskId, todoListId) {
  try {
    const res = await fetch(`${BASE_URL}/${taskId}/${todoListId}/delete`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteList(todoListId) {
  try {
    const res = await fetch(`${BASE_URL}/${todoListId}/delete`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function archiveList(todoListId) {
  try {
    const res = await fetch(`${BASE_URL}/${todoListId}/archive`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  getUsersLists,
  createToDoList,
  addTask,
  updateTaskCompletion,
  deleteTask,
  deleteList,
  archiveList
}