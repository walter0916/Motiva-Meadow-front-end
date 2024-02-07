// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/friendRequests`

async function getUsersRequests(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (error) {
    throw new Error(error)
  }
}

async function createRequest(requestFormData) {
  try {
    const res = await fetch(`${BASE_URL}/new`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}


async function acceptRequest(requestId) {
  try {
    const res = await fetch(`${BASE_URL}/${requestId}/accept`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteRequest(requestId) {
  try {
    const res = await fetch(`${BASE_URL}/${requestId}/delete`, {
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
  createRequest,
  getUsersRequests,
  acceptRequest,
  deleteRequest,
}