// npm service 
import { useState, useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

// services
import * as eventService from '../../services/eventService'

// css
import 'react-big-calendar/lib/sass/styles.scss'

const localizer = momentLocalizer(moment)

const Calender = (props) => {
  const [events, setEvents] = useState([])
  const [showEvent, setShowEvent] = useState({})
  const [formData, setFormData] = useState({
    title: '',
    start: '',
    end: '',
    participants: [],
    allDay: false,
  })

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await eventService.getUsersEvents(props.user.profile)
      const formattedEvents = data.map(event => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
      }))
      setEvents(formattedEvents)
    }
    fetchEvents()
  }, [props.user])


  const handleAllDayChange = (e) => {
    const allDayChecked = e.target.checked
    setFormData({
      ...formData,
      allDay: allDayChecked,
    })
  }
  
  const handleSelectEvent = (event) => {
    setShowEvent(event)
  }

  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    handleAddEvent(formData)
    setFormData({
      title: '',
      start: '',
      end: '',
      participants: [],
    })
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
  }

  return (
    <div className='flex flex-col justify-center items-center w-4/5 h-max min-h-full p-5 bg-gradient-to-r from-[#29bf12] via-[#abff4f] to-[#29bf12]' >
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
        <div className="max-w-md bg-white rounded-md shadow-md w-1/2">
          <form className="space-y-4 flex flex-col p-6 items-center w-full" onSubmit={handleSubmit}>
            <div className="mb-4 w-3/4">
              <label className="block text-gray-600 text-sm font-semibold mb-2">
                Event Title:
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center space-x-2 text-gray-600 text-sm font-semibold">
              All Day:
              <input
                type="checkbox"
                name="allDay"
                checked={formData.allDay}
                onChange={handleAllDayChange}
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
              </label>
            </div>
              <div className="space-y-4">
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-semibold mb-2">
                    Start Time:
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    type="datetime-local"
                    name="start"
                    value={formData.start}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-semibold mb-2">
                    End Time:
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    type="datetime-local"
                    name="end"
                    value={formData.end}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              {/* <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">
                Add Friends:
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  name="friends"
                  multiple
                >
                  <option value="friend1">Friend 1</option>
                  <option value="friend2">Friend 2</option>
                </select>
              </div> */}
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">
                Color:
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
              <button
                type="submit"
                className="bg-blue-500 mb-4 font-semibold text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Create Event
              </button>
          </form>
        </div>
        <div className="max-w-md bg-white p-6 rounded-md shadow-md w-1/3">
          {showEvent && Object.keys(showEvent).length > 0  ? (
            <div className="event-details bg-gray-100 p-4 rounded-md shadow-md">
              <h2 className="text-xl font-bold mb-2">{showEvent.title}</h2>
              <p className="text-gray-600 mb-1">Start Date: {moment(showEvent.start).format(showEvent.allDay ? 'MMMM Do YYYY' : 'MMMM Do YYYY, h:mm:ss a')}</p>
              <p className="text-gray-600 mb-4">End Date: {moment(showEvent.end).format(showEvent.allDay ? 'MMMM Do YYYY' : 'MMMM Do YYYY, h:mm:ss a')}</p>
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