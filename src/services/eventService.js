// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/events`

async function getUsersEvents(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (error) {
    throw new Error(error)
  }
}

async function createEvent(profileId, eventFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/new`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}



export {
  getUsersEvents,
  createEvent,
}