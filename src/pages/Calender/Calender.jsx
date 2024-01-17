// npm service 
import { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

// services
import * as eventService from '../../services/eventService'

// css
import 'react-big-calendar/lib/sass/styles.scss'

const Calender = (props) => {
  const [event, setEvents] = useState({})
  const [formData, setFormData] = useState({
    title: '',
    start: '',
    end: '',
    participants: [],
    allDay: false,
  })
  const localizer = momentLocalizer(moment)

  const events = [
    {
      start: moment().toDate(),
      end: moment().toDate(),
      title: "Some title",
    },
  ]

  const handleAllDayChange = (e) => {
    const allDayChecked = e.target.checked
    setFormData({
      ...formData,
      allDay: allDayChecked,
    })
  }
  
  const handleSelectEvent = (event) => {
    setEvents(event)
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
  }

  return (
    <div className='flex flex-col w-max' >
      <Calendar
        localizer={localizer}
        defaultDate={moment().toDate()}
        events={events}
        startAccessor="start"
        defaultView='month'
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        style={{ 
              height: '80vh',
              width: '70vw'
              }}
      />
      <div className="container mx-auto p-4">
        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="mb-4">
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
              <div className="mb-4">
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
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
              >
                Create Event
              </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Calender