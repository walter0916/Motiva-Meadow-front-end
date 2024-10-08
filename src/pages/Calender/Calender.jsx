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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

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

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
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
    <div className='flex flex-col justify-start items-center laptop:w-4/5 iphone:w-full  p-5 bg-meadow-3rd font-poppins bg-cover bg-no-repeat bg-center bg-fixed min-h-screen overflow-y-auto' >
      <div className='w-full flex justify-center'>
      <Calendar
          localizer={localizer}
          defaultDate={moment().toDate()}
          events={events}
          startAccessor="start"
          defaultView='month'
          endAccessor="end"
          eventPropGetter={eventPropGetter}
          onSelectEvent={handleSelectEvent}
          style={{
            height: screenWidth < 950 ? '70vh' : '50vh', 
            width: screenWidth < 950 ?  '99vw' : '95%', 
            background:'white'
          }}
      />
      </div>
      <div className="h-fit mt-6 flex laptop:flex-row iphone:flex-col items-center justify-around w-full">
        <EventForm
          selectedFriends={selectedFriends}
          handleFriendSelect={handleFriendSelect}
          handleFriendRemove={handleFriendRemove}
          usersFriends={usersFriends}
          handleAddEvent={handleAddEvent}
        />
        <div className="max-w-md bg-white p-6 rounded-md shadow-md laptop:w-1/3 iphone:w-full">
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
            <span>No Event Selected<br />Click event on calender to see more </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Calender