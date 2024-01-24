// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/habits`

async function getUsersHabits(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (error) {
    throw new Error(error)
  }
}

async function createHabit(profileId, habitFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/new`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(habitFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function updateHabitProgress(habitId, habitFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${habitId}/updateHabitProgress`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(habitFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteHabit(habitId) {
  try {
    const res = await fetch(`${BASE_URL}/${habitId}/delete`, {
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

export {
  getUsersHabits,
  createHabit,
  updateHabitProgress,
  deleteHabit
}