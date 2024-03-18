// npm services
import moment from "moment"

const InvitationsCard = (props) => {
  
  const formatDate = (date, allDay) => {
    const formattedDate = moment(date).format('MMMM Do YYYY')
    if (allDay) {
      return formattedDate;
    } else {
      const formattedTime = moment(date).format('h:mm A')
      return formattedDate + ' ' + formattedTime
    }
  }


  return (
    <div className="bg-white rounded-lg shadow-lg overflow-y-auto h-80 p-4">
      <h2 className="text-xl font-semibold mb-4">Invitations</h2>
      {props.usersInvitations.length === 0 ? (
        <p className="text-gray-500">No messages</p>
      ) : (
        <ul className="space-y-2">
          {props.usersInvitations.map((invitation) => 
            <li key={invitation._id} className="text-black rounded-md shadow-md mb-2 px-4 py-2 bg-green-400">
              <span>{invitation.sender.name} - {invitation.event.title} </span> <br />
              <span>{formatDate(invitation.event.start, invitation.event.allDay)} - {formatDate(invitation.event.end, invitation.event.allDay)}</span>
              <div className="flex justify-between mt-2">
              <button onClick={() => props.handleAcceptInvitation(invitation._id)} className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600">
                Accept
              </button>
              <button onClick={() => props.handleDeclineInvitation(invitation._id)} className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600">
                Decline
              </button>
              </div>
            </li>
          )}
        </ul>
      )}
    </div>
  )
}

export default InvitationsCard