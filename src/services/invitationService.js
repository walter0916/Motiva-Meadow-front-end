// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/invitations`

async function getUsersInvitations(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (error) {
    throw new Error(error)
  }
}

async function acceptInvitation(profileId, invitationId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/${invitationId}/accept`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
    })
    const data = await res.json()
    return data;
  } catch (error) {
    console.error(error)
  }
}


async function declineInvitation(profileId, invitationId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/${invitationId}/decline`, {
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

export {
  getUsersInvitations,
  acceptInvitation,
  declineInvitation
}