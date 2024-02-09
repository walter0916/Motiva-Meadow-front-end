// npm services
import { useState, useEffect } from "react"

// components 
import FriendCard from "../../components/FriendCard/FriendCard"

// services 
import * as profileService from '../../services/profileService'
import * as friendRequestService from '../../services/friendRequestService'

const Friends = (props) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [foundUsers, setFoundUsers] = useState({})
  const [profiles, setProfiles] = useState({})
  const [userProfile, setUserProfile] = useState({})
  const [sentRequests, setSentRequests] = useState({})
  const [receivedRequests, setReceivedRequests] = useState({})
  const [activeTab, setActiveTab] = useState('friends')

  useEffect(() => {
    const fetchData = async () => {
      const profilesData = await profileService.getAllProfiles()
      const requestsData = await friendRequestService.getUsersRequests(props.user.profile)
      const sentRequestsData = requestsData.filter(request => request.sender._id === props.user.profile)
      const receivedRequestsData = requestsData.filter(request => request.recipient._id === props.user.profile)
      const userProfileData = await profileService.getProfileById(props.user.profile)
      setUserProfile(userProfileData)
      setProfiles(profilesData)
      setSentRequests(sentRequestsData)
      setReceivedRequests(receivedRequestsData)
    }
    fetchData()
  }, [props.user])

  const handleSearch = async () => {
    const name = searchTerm.toLowerCase()
    const filteredProfiles = profiles.filter(profile => profile.name.toLowerCase().includes(name))
    setFoundUsers(filteredProfiles)
  }

  const handleSendFriendRequest = async (userId) => {
    const formData = {
      sender: props.user.profile,
      recipient: userId
    }
    const request = await friendRequestService.createRequest(formData)
  }

  const  handleRemoveFriend = async (friendId) => {
    const friend = await profileService.removeFriend(props.user.profile, friendId)
  }

  const handleAcceptRequest = async (requestId) => {
    await friendRequestService.acceptRequest(requestId)
    const requestsData = await friendRequestService.getUsersRequests(props.user.profile)
    const receivedRequestsData = requestsData.filter(request => request.recipient === props.user.profile)
    setReceivedRequests(receivedRequestsData)
  }

  const handleDeclineRequest = async (requestId) => {
    await friendRequestService.deleteRequest(requestId)
    const requestsData = await friendRequestService.getUsersRequests(props.user.profile)
    const receivedRequestsData = requestsData.filter(request => request.recipient === props.user.profile)
    setReceivedRequests(receivedRequestsData)
  }

  return (
    <div className="bg-white p-6 rounded-md shadow-md h-full w-3/4 flex flex-col content-center items-center">
      <nav className="mb-4">
        <button
          className={`mr-4 ${activeTab === 'friends' ? 'font-bold' : ''}`}
          onClick={() => setActiveTab('friends')}
        >
          Friends
        </button>
        <button
          className={`mr-4 ${activeTab === 'sentRequests' ? 'font-bold' : ''}`}
          onClick={() => setActiveTab('sentRequests')}
        >
          Sent Requests
        </button>
        <button
          className={`${activeTab === 'receivedRequests' ? 'font-bold' : ''}`}
          onClick={() => setActiveTab('receivedRequests')}
        >
          Received Requests
        </button>
      </nav>
      {activeTab === 'friends' && (
        <div className="mb-4">
          <form>
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
          {userProfile.friends ? (
            userProfile.friends.map(friend => 
              < FriendCard 
                key={friend._id} 
                friend={friend}
                handleRemoveFriend={handleRemoveFriend} 
              />
              )) : (
              <p className="text-gray-800">No friends found</p>
            )}
        </div>
      )}
      {activeTab === 'sentRequests' && (
        <div>
          <p className="text-gray-800">Sent Friend Requests</p>
          <div className="mb-4">
          <form>
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
          {sentRequests.length > 0 ? (
            sentRequests.map(request => (
            <div key={request._id} className="flex items-center mb-4">
              <img
                src={request.recipient.photo}
                alt=""
                className="w-8 h-8 object-cover rounded-full mr-2"
              />
              <span className="text-gray-800">{request.recipient.name}</span>
            </div>
            ))
          ) : (
            <p className="text-gray-800">No sent friend requests</p>
          )}
        </div>
      )}
      {activeTab === 'receivedRequests' && (
        <div>
          <p className="text-gray-800">Received Friend Requests</p>
          {receivedRequests.length > 0 ? (
            receivedRequests.map(request => (
              <div key={request._id} className="flex items-center mb-4">
                <img
                  src={request.sender.photo}
                  alt=""
                  className="w-8 h-8 object-cover rounded-full mr-2"
                />
                <span className="text-gray-800">{request.sender.name}</span>
                <button
                  onClick={() => handleAcceptRequest(request._id)}
                  className="bg-green-500 p-2 ml-2 rounded-md text-white focus:outline-none"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleDeclineRequest(request._id)}
                  className="bg-red-500 p-2 ml-2 rounded-md text-white focus:outline-none"
                >
                  Decline
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-800">No received friend requests</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Friends
