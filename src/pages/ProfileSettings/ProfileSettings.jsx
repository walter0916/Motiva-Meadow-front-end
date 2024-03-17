// npm services
import { useState, useEffect } from 'react'

// components
import ChangePassword from '../../components/ChangePassword/ChangePassword'
import ProfileForm from '../../components/ProfileForm/ProfileForm'
import PreferencesForm from '../../components/PreferencesForm/PreferencesForm'
import DeleteProfileForm from '../../components/DeleteProfileForm/DeletProfileForm'

// services
import * as profileService from '../../services/profileService'

const ProfileSettings = (props) => {
  const [expandedSetting, setExpandedSetting] = useState(null)
  const [userProfile, setUserProfile] = useState({})

  useEffect(() => {
    const fetchUserProfile = async () => {
      const data = await profileService.getProfileById(props.user.profile)
      setUserProfile(data)
    }
    fetchUserProfile()
  }, [props.user.profile])

  const handleToggleSetting = (setting) => {
    if (expandedSetting === setting) {
      setExpandedSetting(null)
    } else {
      setExpandedSetting(setting)
    }
  }


  const handleEditProfile = async (formData, photoData) => {
    await profileService.editProfile(formData, photoData)
  }

  const handleEditProfilePreferences = async (formData) => {
    await profileService.editProfilePreferences(formData)
  }

  const handleDeleteProfile = async () => {
    await profileService.deleteProfile()
  }

  return (
    <div className="h-screen w-4/5 bg-meadow-3rd bg-fixed bg-cover bg-center">
    <div className="space-y-1 font-poppins">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <div
            className="cursor-pointer px-4 py-5 flex items-center justify-between bg-green-600 hover:bg-green-700 text-white"
            onClick={() => handleToggleSetting('changePassword')}
          >
            <div className="flex items-center">
              <svg
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span className="font-semibold">Change Password</span>
            </div>
            <svg
              className="h-5 w-5 transform transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              rotate={expandedSetting === 'changePassword' ? '0' : '90'}
            >
              <path
                fillRule="evenodd"
                d="M6.293 5.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {expandedSetting === 'changePassword' && (
            <div className="px-4 py-5">
              {<ChangePassword />}
            </div>
          )}
        </div>
        <div className="border-b border-gray-200">
          <div
            className="cursor-pointer px-4 py-5 flex items-center justify-between bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => handleToggleSetting('editProfile')}
          >
            <div className="flex items-center">
              <svg
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-semibold">Edit Profile</span>
            </div>
            <svg
              className="h-5 w-5 transform transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              rotate={expandedSetting === 'editProfile' ? '0' : '90'}
            >
              <path
                fillRule="evenodd"
                d="M6.293 5.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {expandedSetting === 'editProfile' && (
            <div className="px-4 py-5">
              {<ProfileForm 
                userProfile={userProfile}
                handleEditProfile={handleEditProfile}
              />}
            </div>
          )}
        </div>
        <div className="border-b border-gray-200">
          <div
            className="cursor-pointer px-4 py-5 flex items-center justify-between bg-sky-500 hover:bg-sky-600 text-white"
            onClick={() => handleToggleSetting('changePreferences')}
          >
            <div className="flex items-center">
              <svg
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-semibold">Change Preferences</span>
            </div>
            <svg
              className="h-5 w-5 transform transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              rotate={expandedSetting === 'changePreferences' ? '0' : '90'}
            >
              <path
                fillRule="evenodd"
                d="M6.293 5.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {expandedSetting === 'changePreferences' && (
            <div className="px-4 py-5">
              {<PreferencesForm
                  userProfile={userProfile}
                  handleEditProfilePreferences={handleEditProfilePreferences}
              />}
            </div>
          )}
        </div>
        <div className="border-b border-gray-200">
          <div
            className="cursor-pointer px-4 py-5 flex items-center justify-between bg-orange-500 hover:bg-orange-600 text-white"
            onClick={() => handleToggleSetting('deleteProfile')}
          >
            <div className="flex items-center">
              <svg
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-semibold">Delete Profile</span>
            </div>
            <svg
              className="h-5 w-5 transform transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              rotate={expandedSetting === 'deleteProfile' ? '0' : '90'}
            >
              <path
                fillRule="evenodd"
                d="M6.293 5.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {expandedSetting === 'deleteProfile' && (
            <div className="px-4 py-5">
              {<DeleteProfileForm 
                  user={props.user}
                  handleDeleteProfile={handleDeleteProfile}
              />}
            </div>
          )}
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default ProfileSettings
