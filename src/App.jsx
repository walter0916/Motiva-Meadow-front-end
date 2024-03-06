// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './components/ChangePassword/ChangePassword'
import Calender from './pages/Calender/Calender'
import Tasks from './pages/Tasks/Tasks'
import Habits from './pages/Habits/Habits'
import Goals from './pages/Goals/Goals'
import Friends from './pages/Friends/Friends'
import ProfileSettings from './pages/ProfileSettings/ProfileSettings'

// components
import SideBar from './components/SideBar/SideBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        const profileData = await profileService.getProfileById(user.profile)
        setProfile(profileData)
      }
    }
    fetchProfile()
  }, [user])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  return (
    <div className='app'>
      <SideBar user={user} profile={profile} handleLogout={handleLogout} />
      <Routes>
      <Route 
        path="/" 
        element={
          <ProtectedRoute user={user}>
            <Home user={user} />
          </ProtectedRoute>  
          } 
        />
        <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute user={user}>
            <Dashboard user={user} />
          </ProtectedRoute>  
          } 
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/calender"
          element={
            <ProtectedRoute user={user}>
              <Calender user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tasks"
          element={
            <ProtectedRoute user={user}>
              <Tasks user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/habits"
          element={
            <ProtectedRoute user={user}>
              <Habits user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/goals"
          element={
            <ProtectedRoute user={user}>
              <Goals user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/friends"
          element={
            <ProtectedRoute user={user}>
              <Friends user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute user={user}>
              <ProfileSettings user={user} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
