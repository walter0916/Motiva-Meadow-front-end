// npm services
import { useState } from "react"



const FriendCard = (props) => {
  
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
          onClick={() => props.handleSendMessage(props.friend._id)}
          className="btn send-message-btn bg-blue-500 text-white px-4 py-2 rounded-md mb-2 focus:outline-none"
        >
          Send Message
        </button>
        <button
          onClick={() => props.handleRemoveFriend(props.friend._id)}
          className="btn unfriend-btn bg-red-500 text-white px-4 py-2 rounded-md mb-2 focus:outline-none"
        >
          Unfriend
        </button>
        <button
          onClick={() => props.handleViewStats(props.friend._id)}
          className="btn view-stats-btn bg-green-500 text-white px-4 py-2 rounded-md focus:outline-none"
        >
          View Stats
        </button>
      </div>
    </div>
  )
}

export default FriendCard