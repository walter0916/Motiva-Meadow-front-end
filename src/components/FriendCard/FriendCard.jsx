// npm services
import { useState, useEffect } from "react"

// services
import * as statService from '../../services/statService'

const FriendCard = (props) => {
  const [userStats, setUsersStats] = useState()
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMessageFormExpanded, setIsMessageFormExpanded] = useState(false)
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
  
  return (
    <div key={props.friend._id} className="friend-card bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
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
          className="btn send-message-btn bg-blue-500 text-white px-4 py-2 rounded-md mb-2 focus:outline-none"
        >
          Send Message
        </button>
        {isMessageFormExpanded && (
        <form className="message-form mt-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="content"
            placeholder="Send Some Inspiration..."
            value={formData.content}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 mb-2"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none">Send</button>
        </form>
      )}
        <button
          onClick={() => props.handleRemoveFriend(props.friend._id)}
          className="btn unfriend-btn bg-red-500 text-white px-4 py-2 rounded-md mb-2 focus:outline-none"
        >
          Unfriend
        </button>
        <button
          onClick={toggleExpansion}
          className="btn view-stats-btn bg-green-500 text-white px-4 py-2 rounded-md focus:outline-none"
        >
          {isExpanded ? "Hide Stats" : "View Stats"}
        </button>
      </div>
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