// npm services
import { useState } from "react"

const EventForm = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    start: '',
    end: '',
    invitedParticipants: [],
    allDay: false,
  })

  const handleAllDayChange = (e) => {
    const allDayChecked = e.target.checked
    setFormData({
      ...formData,
      allDay: allDayChecked,
    })
  }

  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    props.handleAddEvent(formData)
    setFormData({
      title: '',
      start: '',
      end: '',
      invitedParticipants: [],
      allDay: false
    })
  }

  const handleAddFriendInvitation = (friendId) => {
    setFormData({ ...formData, invitedParticipants: [...formData.invitedParticipants, friendId] })
    props.handleFriendSelect(friendId)
  }

  const handleRemoveFriendInvitation = (friendId) => {
    const updatedInvitedParticipants = formData.invitedParticipants.filter(id => id !== friendId)
    setFormData({ ...formData, invitedParticipants: updatedInvitedParticipants })
    props.handleFriendRemove(friendId)
  }



  return (
    <div className="max-w-md bg-white rounded-md shadow-md w-1/2">
      <form className="space-y-4 flex flex-col p-6 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-wrap justify-between items-center mb-4 w-full">
          <label className="w-1/4 text-left text-gray-600 text-sm font-semibold mb-2">
            Event Title:
          </label>
          <input
            className="w-1/2 px-3 py-2 border border-gray-300 rounded-md"
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap justify-between items-center mb-4 w-full">
          <label className="w-1/4 text-left text-gray-600 text-sm font-semibold mb-2">
            All Day:
          </label>
          <div className="w-1/2 flex items-center justify-center">
          <input
            type="checkbox"
            name="allDay"
            checked={formData.allDay}
            onChange={handleAllDayChange}
            className="h-5 w-5 text-indigo-600"
          />
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap justify-between items-center mb-4 w-full">
            <label className="w-1/4 text-left text-gray-600 text-sm font-semibold mb-2">
              Start Time:
            </label>
            <input
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md"
              type="datetime-local"
              name="start"
              value={formData.start}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-wrap justify-between items-center mb-4 w-full">
            <label className="w-1/4 text-left text-gray-600 text-sm font-semibold mb-2">
              End Time:
            </label>
            <input
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md"
              type="datetime-local"
              name="end"
              value={formData.end}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center mb-4 w-full">
          <label className="w-1/4 text-left text-gray-600 text-sm font-semibold mb-2">
            Color:
          </label>
          <select
            className="w-1/2 px-3 py-2 border border-gray-300 rounded-md"
            name="color"
            onChange={handleChange}
            value={formData.color}
          >
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="purple">Purple</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="pink">Pink</option>
          </select>
        </div>
        <div className="flex flex-wrap justify-between items-center mb-4 w-full">
          <label className="w-1/4 text-left text-gray-600 text-sm font-semibold mb-2">
            Invite Friends:
          </label>
          {Object.keys(props.usersFriends).length > 0 ? (
            <select
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md h-10 overflow-y-auto"
              name="invitedParticipants"
              onChange={(e) => handleAddFriendInvitation(e.target.value)}
              value={formData.invitedParticipants}
              multiple 
            >
              {props.usersFriends.map(friend => (
                <option key={friend._id} value={friend._id}>
                  {friend.name}
                </option>
              ))}
            </select>
          ) : (
            <select
              className="w-3/4 px-3 py-2 border border-gray-300 rounded-md"
              disabled
            >
              <option value="">No friends available</option>
              <option value="">Add friends to invite them</option>
            </select>
          )}
        </div>
        <div className="flex flex-wrap items-center mb-4 w-full">
          <label className="w-1/4 text-left text-gray-600 text-sm font-semibold mb-2">
            Selected Friends:
          </label>
          {props.selectedFriends[0] ? (
            <div className="flex flex-wrap">
              {props.selectedFriends[0].map(friend => (
                <div key={friend._id} className="bg-gray-200 px-2 py-1 rounded-md mr-2 mb-2 flex items-center">
                  <span className="mr-2">{friend.name}</span>
                  <button type="button" onClick={() => handleRemoveFriendInvitation(friend._id)} className="text-red-600 focus:outline-none">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm2-9a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 .01V8a1 1 0 0 1 1-1zM8 8a1 1 0 1 1 2 0v.01a1 1 0 1 1-2-.01V8z"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p>No friends selected</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 mb-4 font-semibold text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Create Event
        </button>
      </form>
    </div>
  )
}

export default EventForm