// npm service 
import { useState, useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

// services
import * as eventService from '../../services/eventService'
import * as profileService from '../../services/profileService'

// components 
import EventForm from '../../components/EventForm/EventForm'

// css
import 'react-big-calendar/lib/sass/styles.scss'

const localizer = momentLocalizer(moment)

const Calender = (props) => {
  const [events, setEvents] = useState([])
  const [usersFriends, setUsersFriends] = useState({})
  const [showEvent, setShowEvent] = useState({})
  const [selectedFriends, setSelectedFriends] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await eventService.getUsersEvents(props.user.profile)
      const profileData = await profileService.getProfileById(props.user.profile)
      const friendData = profileData.friends
      const formattedEvents = data.map(event => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
      }))
      setEvents(formattedEvents)
      setUsersFriends(friendData)
    }
    fetchEvents()
  }, [props.user])
  
  const handleSelectEvent = (event) => {
    setShowEvent(event)
  }

  const handleAddEvent = async (eventFormData) => {
    const newEvent = await eventService.createEvent(props.user.profile, eventFormData)
    console.log(newEvent)
    setEvents([...events, newEvent])
  }

  const eventPropGetter = (event) => ({
    ... (event.color.includes('green') && {
      className: 'green'
    }),
    ... (event.color.includes('blue') && {
      className: 'blue'
    }),
    ... (event.color.includes('yellow') && {
      className: 'yellow'
    }),
    ... (event.color.includes('purple') && {
      className: 'purple'
    }),
    ... (event.color.includes('red') && {
      className: 'red'
    }),
    ... (event.color.includes('orange') && {
      className: 'orange'
    }),
    ... (event.color.includes('pink') && {
      className: 'pink'
    })
  })

  const handleDeleteEvent = async (eventId) => {
    await eventService.deleteEvent(eventId)
    const filteredData = events.filter(event => event._id !== eventId)
    setEvents(filteredData)
    setShowEvent({})
  }

  const handleFriendSelect = (friendId) => {
    const friendData = usersFriends.filter(friend => friend._id === friendId)
    setSelectedFriends([...selectedFriends, friendData])
  }

  const handleFriendRemove = (friendId) => {
    const updatedSelectedFriends = selectedFriends[0].filter(friend => friend._id !== friendId)
    setSelectedFriends(updatedSelectedFriends)
  }

  return (
    <div className='flex flex-col justify-center items-center w-4/5 h-max min-h-full p-5 bg-meadow-3rd font-poppins bg-cover bg-no-repeat bg-center bg-fixed overflow-y-auto' >
      <Calendar
          localizer={localizer}
          defaultDate={moment().toDate()}
          events={events}
          startAccessor="start"
          defaultView='month'
          endAccessor="end"
          eventPropGetter={eventPropGetter}
          onSelectEvent={handleSelectEvent}
          style={{ height: '50vh', width: '70vw', background:'white'}}
      />
      <div className="h-1/2 mt-6 flex flex-row items-center justify-around w-full">
        <EventForm
          selectedFriends={selectedFriends}
          handleFriendSelect={handleFriendSelect}
          handleFriendRemove={handleFriendRemove}
          usersFriends={usersFriends}
          handleAddEvent={handleAddEvent}
        />
        <div className="max-w-md bg-white p-6 rounded-md shadow-md w-1/3">
          {showEvent && Object.keys(showEvent).length > 0  ? (
            <div className="event-details bg-gray-100 p-4 rounded-md shadow-md">
              <h2 className="text-xl font-bold mb-2">{showEvent.title}</h2>
              <p className="text-gray-600 mb-1">Start Date: {moment(showEvent.start).format(showEvent.allDay ? 'MMMM Do YYYY' : 'MMMM Do YYYY, h:mm:ss a')}</p>
              <p className="text-gray-600 mb-4">End Date: {moment(showEvent.end).format(showEvent.allDay ? 'MMMM Do YYYY' : 'MMMM Do YYYY, h:mm:ss a')}</p>
              {props.user.profile === showEvent.author._id && (
                <>
                  <p className="text-gray-600 mb-1">Invited Participants: {showEvent.invitedParticipants.map(participant => participant.name).join(', ')}</p>
                  <p className="text-gray-600 mb-4">Accepted Participants: {showEvent.acceptedParticipants.map(participant => participant.name).join(', ')}</p>
                </>
              )}
              <button 
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
                onClick={() => handleDeleteEvent(showEvent._id)}
              >
                Delete
              </button>
            </div>
          ) : ( 
            'No Event Selected'
          )}
        </div>
      </div>
    </div>
  )
}

export default Calender