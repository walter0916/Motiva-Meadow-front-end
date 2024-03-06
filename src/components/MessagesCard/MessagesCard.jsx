const MessagesCard = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-y-auto h-80 p-4">
      <h2 className="text-xl font-semibold mb-4">Inbox</h2>
      {props.usersMessages.length === 0 ? (
        <p className="text-gray-500">No messages</p>
      ) : (
        <ul className="space-y-2">
          {props.usersMessages.map((message) => 
            <li key={message._id} className="text-black rounded-md shadow-md mb-2 px-4 py-2 bg-green-400">
              {message.content} - {message.sender.name}
            </li>
          )}
        </ul>
      )}
    </div>
  )
}

export default MessagesCard