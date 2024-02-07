// npm services
import { useState, useEffect } from "react"

// services 
import * as profileService from '../../services/profileService'

const Friends = (props) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [foundUsers, setFoundUsers] = useState({})
  const [profiles, setProfiles] = useState({})

  useEffect(() => {
    const fetchProfiles = async () => {
      const data = await profileService.getAllProfiles()
      setProfiles(data)
    }
    fetchProfiles()
  }, [props.user])

  const handleSearch = async () => {
    const name = searchTerm.toLowerCase()
    const filteredProfiles = profiles.filter(profile => profile.name.toLowerCase().includes(name))
    setFoundUsers(filteredProfiles)
  }

  const handleSendFriendRequest = async (userId) => {
    
  }

  return (
    <div className="bg-white p-6 rounded-md shadow-md h-1/5 overflow-y-auto">
      <form className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 mr-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="bg-orange-500 p-2 rounded-md text-white focus:outline-none"
        >
          Search
        </button>
      </form>
      <div>
        {foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <div key={user.id} className="flex items-center mb-4">
              <img
                src={user.photo}
                alt=""
                className="w-8 h-8 object-cover rounded-full mr-2"
              />
              <span className="text-gray-800">{user.name}</span>
              <button
                onClick={() => handleSendFriendRequest(user._id)}
                className="bg-blue-500 p-2 ml-2 rounded-md text-white focus:outline-none"
              >
                Add Friend
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-800">No friends found</p>
        )}
      </div>
    </div>
  )
}

export default Friends
