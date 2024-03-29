// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/messages`

async function getUserMessages(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (error) {
    throw new Error(error)
  }
}

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

async function deleteMessage(messageId) {
  try {
    const res = await fetch(`${BASE_URL}/${messageId}/delete`, {
      method: 'DELETE',
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

export {
  getUserMessages,
  createMessage,
  deleteMessage
}