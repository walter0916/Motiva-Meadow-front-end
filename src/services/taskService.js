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

export {
  getUsersLists,
  createToDoList
}