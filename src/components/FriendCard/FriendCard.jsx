// npm services
import { useState, useEffect } from "react"

// services
import * as statService from '../../services/statService'

const FriendCard = (props) => {
  const [userStats, setUsersStats] = useState()
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMessageFormExpanded, setIsMessageFormExpanded] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formData, setFormData] = useState({
    content: ''
  })

  useEffect(() => {
    const fetchStats = async () => {
      const data = await statService.getUsersStats(props.friend._id)
      setUsersStats(data)
    }
    fetchStats()
  }, [props.friend._id])

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  const toggleMessageFormExpansion = () => {
    setIsMessageFormExpanded(!isMessageFormExpanded)
  }

  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    props.handleAddMessage(props.friend._id, formData)
    setFormData({
      content: ''
    })
  }

  const handleUnfriendClick = () => {
    setShowConfirmation(true)
  }

  const handleUnfriendConfirm = () => {
    setShowConfirmation(false)
    props.handleRemoveFriend(props.friend._id)
  }

  const handleUnfriendCancel = () => {
    setShowConfirmation(false)
  }
  
  return (
    <div key={props.friend._id} className="friend-card bg-white rounded-lg shadow-md p-4 flex flex-col justify-between mt-6">
      <div className="friend-info text-center">
        <img
          src={props.friend.photo}
          alt=""
          className="profile-pic w-20 h-20 rounded-full mx-auto mb-2"
        />
        <span className="name text-lg font-semibold">{props.friend.name}</span>
      </div>
      <div className="buttons flex flex-col items-center mt-4">
        <button
          onClick={toggleMessageFormExpansion}
          className="btn send-message-btn font-semibold bg-blue-500 text-white px-4 py-2 rounded-md mb-2 focus:outline-none hover:bg-blue-600 "
        >
          Send Message
        </button>
        {isMessageFormExpanded && (
        <form className="message-form mt-4 w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            name="content"
            placeholder="Send Some Inspiration..."
            value={formData.content}
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-2 mb-2 laptop:w-3/4 iphone:w-8/12 iphone:mr-2 iphone:text-sm"
          />
          <button className="bg-blue-500 font-semibold text-white py-2 rounded-md focus:outline-none w-1/5 hover:bg-blue-600">Send</button>
        </form>
        )}
        <button
          onClick={handleUnfriendClick}
          className="btn unfriend-btn font-semibold bg-red-500 text-white px-4 py-2 rounded-md mb-2 focus:outline-none hover:bg-red-600"
        >
          Unfriend
        </button>
        <button
          onClick={toggleExpansion}
          className="btn view-stats-btn font-semibold bg-green-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-green-600"
        >
          {isExpanded ? "Hide Stats" : "View Stats"}
        </button>
      </div>
      {showConfirmation && (
        <div className="confirmation-dialog bg-white border border-gray-300 rounded-lg p-4 mt-4">
          <p className="text-center mb-4">Are you sure you want to unfriend {props.friend.name}?</p>
          <div className="flex justify-center">
            <button onClick={handleUnfriendConfirm} className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md mr-2 hover:bg-red-600">Yes</button>
            <button onClick={handleUnfriendCancel} className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md ml-2 hover:bg-gray-400">Cancel</button>
          </div>
        </div>
      )}
      {isExpanded && (
        <div className="stats-container bg-white border border-gray-300 rounded-lg p-4 mt-4">
          {userStats && Object.keys(userStats).length > 0 ? (
          <>
            <p className="text-green-600">Goals Completed: {userStats[0].goalsCompleted}</p>
            <p className="text-orange-600">Hobbies Streak: {userStats[0].hobbiesStreak}</p>
            <p className="text-blue-600">To-Do List Streak: {userStats[0].toDoListStreak}</p>
            <p className="text-gray-800">To-Do List Completed: {userStats[0].toDoListCompleted}</p>
          </>
        ) : (
            <p className="text-gray-800">Loading stats...</p>
          )}
        </div>
      )}
    </div>
  )
}

export default FriendCard