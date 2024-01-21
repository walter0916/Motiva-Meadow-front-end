// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/hobbies`

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

export {
  createHobby,
}