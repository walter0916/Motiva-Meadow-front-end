const getColorClass = (color) => {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    purple: 'bg-purple-500',
    red: 'bg-red-500',
    orange: 'bg-orange-500',
    pink: 'bg-pink-500',
  }
  return colorClasses[color] || 'bg-gray-200'
}

const EventsCard = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-y-auto h-80 p-4">
      <ul className="p-2">
        {props.usersEvents.map((event) => {
          const startDate = new Date(event.start)
          const endDate = new Date(event.end)
          const startTime = startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          const endTime = endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          const startDateString = startDate.toDateString()
          const endDateString = endDate.toDateString()
          const isSameDay = startDateString === endDateString

          return (
            <li key={event._id} className={`rounded-md shadow-md mb-2 px-4 py-2 ${getColorClass(event.color)}`}>
              <strong className="text-white">{event.title}</strong> - {isSameDay ? startDateString : `${startDateString} to ${endDateString}`}
              {event.allDay ? '' : (isSameDay ? `, ${startTime} to ${endTime}` : `, ${startTime} to ${endDateString}, ${endTime}`)}
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default EventsCard