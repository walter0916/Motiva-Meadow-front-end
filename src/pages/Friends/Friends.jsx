// npm services
import { useState, useEffect } from "react"

// components 
import FriendCard from "../../components/FriendCard/FriendCard"
import FriendSearch from "../../components/FriendSearch/FriendSearch"

// services 
import * as profileService from '../../services/profileService'
import * as friendRequestService from '../../services/friendRequestService'
import * as messageService from '../../services/messageService'

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
    const filteredProfiles = profiles.filter(profile => profile.name.toLowerCase().includes(name) && !profile.name.toLowerCase().includes(userProfile.name.toLowerCase()))
    setFoundUsers(filteredProfiles)
  }

  const handleSendFriendRequest = async (userId) => {
    const formData = {
      sender: props.user.profile,
      recipient: userId
    }
    const request = await friendRequestService.createRequest(formData)
    setSentRequests((prevRequests) => [...prevRequests, request])
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

  const handleAddMessage = async (recipientId, messageFormData) => {
    await messageService.createMessage(props.user.profile, recipientId, messageFormData)
  }

  return (
    <div className="bg-gradient-to-r from-[#29bf12] via-[#abff4f] to-[#29bf12] p-6 rounded-md  h-full w-4/5 flex flex-col content-center items-center overflow-y-auto">
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
          <FriendSearch  
            handleSendFriendRequest={handleSendFriendRequest}
            handleSearch={handleSearch}
            foundUsers={foundUsers}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          {userProfile.friends ? (
            userProfile.friends.map(friend => 
              < FriendCard 
                key={friend._id} 
                friend={friend}
                handleRemoveFriend={handleRemoveFriend}
                handleAddMessage={handleAddMessage} 
              />
              )) : (
              <p className="text-gray-800">No friends found</p>
            )}
        </div>
      )}
      {activeTab === 'sentRequests' && (
        <div>
          <div className="mb-4">
          <FriendSearch  
            handleSendFriendRequest={handleSendFriendRequest}
            handleSearch={handleSearch}
            foundUsers={foundUsers}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
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
