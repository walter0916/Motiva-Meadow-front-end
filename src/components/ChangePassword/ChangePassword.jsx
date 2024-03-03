// npm modules
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as authService from '../../services/authService'

// css
import styles from './ChangePassword.module.css'

const ChangePassword = ({ handleAuthEvt }) => {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    password: '',
    newPassword: '',
    newPasswordConf: '',
  })

  const handleChange = evt => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.changePassword(formData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      setMessage(err.message)
    }
  }

  const { password, newPassword, newPasswordConf } = formData

  const isFormInvalid = () => {
    return !(password && newPassword && newPassword === newPasswordConf)
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-4">Change Password</h1>
      {message && <p className="text-red-500 mb-4">{message}</p>}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="password">
            Current Password
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="password"
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="newPassword">
            New Password
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="password"
            id="newPassword"
            value={newPassword}
            name="newPassword"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="newPasswordConf">
            Confirm New Password
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="password"
            id="newPasswordConf"
            value={newPasswordConf}
            name="newPasswordConf"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between items-center">
          <Link to="/" className="text-sm text-blue-500 hover:underline">
            Cancel
          </Link>
          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 "
            disabled={isFormInvalid()}
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChangePassword
