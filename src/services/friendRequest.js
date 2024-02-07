// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/friendRequests`

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

export {
  createRequest
}