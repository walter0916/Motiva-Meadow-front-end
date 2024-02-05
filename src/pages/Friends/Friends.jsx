import { useState, useEffect } from "react"

const Friends = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [foundUsers, setFoundUsers] = useState([])

  const handleSearch = async () => {

  }

  const handleSendFriendRequest = (userId) => {

  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </form>

      <div>
        {foundUsers.map((user) => (
          <div key={user.id}>
            <span>{user.name}</span>
            <button onClick={() => handleSendFriendRequest(user.id)}>
              Add Friend
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Friends
