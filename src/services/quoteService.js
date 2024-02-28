// services
import * as tokenService from './tokenService'

async function getQuotes() {
  try {
    const res = await fetch("https://type.fit/api/quotes", {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

export {
  getQuotes
}