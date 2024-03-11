// npm modules
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as authService from '../../services/authService'

const LoginPage = ({ handleAuthEvt }) => {
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = evt => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      if (!import.meta.env.VITE_BACK_END_SERVER_URL) {
        throw new Error('No VITE_BACK_END_SERVER_URL in front-end .env')
      }
      await authService.login(formData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      setMessage(err.message)
    }
  }

  const { email, password } = formData

  const isFormInvalid = () => {
    return !(email && password)
  }

  return (
    <main className="flex justify-center items-center h-screen bg-white w-4/5">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-4">Log In</h1>
        <p className="text-red-500 text-center mb-4">{message}</p>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label className="block mb-2">
            Email
            <input
              type="text"
              value={email}
              name="email"
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </label>
          <label className="block mb-2">
            Password
            <input
              type="password"
              value={password}
              name="password"
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </label>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-green-500 font-semibold text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
              disabled={isFormInvalid()}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default LoginPage
