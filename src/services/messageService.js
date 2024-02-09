// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/messages`

async function createMessage(senderId, recipientId, messageFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${senderId}/${recipientId}/new`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messageFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  createMessage
}