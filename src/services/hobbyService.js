// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/hobbies`

async function getUsersHobbies(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (error) {
    throw new Error(error)
  }
}

async function createHobby(profileId, hobbyFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/new`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(hobbyFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function updateHobbyProgress(hobbyId, hobbyFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${hobbyId}/updateHobbyProgress`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(hobbyFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  getUsersHobbies,
  createHobby,
  updateHobbyProgress
}