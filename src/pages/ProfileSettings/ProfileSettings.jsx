import { useState } from 'react'

const ProfileSettings = () => {
  const [expandedSetting, setExpandedSetting] = useState(null)

  const handleToggleSetting = (setting) => {
    if (expandedSetting === setting) {
      setExpandedSetting(null)
    } else {
      setExpandedSetting(setting)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="mt-8">
        <div className="space-y-1">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="border-b border-gray-200">
              <div
                className="cursor-pointer px-4 py-5 sm:px-6 flex items-center justify-between"
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
                  <span className="font-semibold text-gray-800">Change Password</span>
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
                <div className="px-4 py-5 sm:px-6">
                  {/* Form for changing password */}
                </div>
              )}
            </div>
            <div className="border-b border-gray-200">
              <div
                className="cursor-pointer px-4 py-5 sm:px-6 flex items-center justify-between"
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
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span className="font-semibold text-gray-800">Edit Profile</span>
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
                <div className="px-4 py-5 sm:px-6">
                  {/* Form for editing profile */}
                </div>
              )}
            </div>
            <div className="border-b border-gray-200">
              <div
                className="cursor-pointer px-4 py-5 sm:px-6 flex items-center justify-between"
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
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span className="font-semibold text-gray-800">Change Preferences</span>
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
                <div className="px-4 py-5 sm:px-6">
                  {/* Form for changing preferences */}
                </div>
              )}
            </div>
            <div className="border-b border-gray-200">
              <div
                className="cursor-pointer px-4 py-5 sm:px-6 flex items-center justify-between"
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
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span className="font-semibold text-gray-800">Delete Profile</span>
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
                <div className="px-4 py-5 sm:px-6">
                  {/* Form for deleting profile */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSettings
