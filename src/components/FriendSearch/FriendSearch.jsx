const FriendSearch = (props) => {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search by name"
          value={props.searchTerm}
          onChange={(e) => props.setSearchTerm(e.target.value)}
          className="p-2 mr-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 iphone:w-3/5"
        />
        <button
          type="button"
          onClick={props.handleSearch}
          className="bg-orange-500 font-semibold p-2 rounded-md text-white focus:outline-none hover:bg-orange-600"
        >
          Search
        </button>
        </form>
        <div>
          {props.foundUsers.length > 0 ? (
            props.foundUsers.map((user) => (
              <div key={user.id} className="flex items-center mb-4">
                <img
                  src={user.photo}
                  alt=""
                  className="w-8 h-8 object-cover rounded-full mr-2"
                />
                <span className="text-gray-800">{user.name}</span>
                <button
                  onClick={() => props.handleSendFriendRequest(user._id)}
                  className="bg-blue-500 font-semibold p-2 ml-2 rounded-md text-white focus:outline-none hover:bg-blue-600"
                >
                  Add Friend
                </button>
                </div>
              ))
            ) :  props.searchTerm ? (
              <p className="text-gray-800">No friends found</p>
            ) : null}
      </div>
    </>
  )
}

export default FriendSearch