// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/goals`

async function getUsersGoals(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (error) {
    throw new Error(error)
  }
}

async function createGoal(profileId, goalFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/new`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(goalFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteGoal(goalId) {
  try {
    const res = await fetch(`${BASE_URL}/${goalId}/delete`, {
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
  getUsersGoals,
  createGoal,
  deleteGoal
}