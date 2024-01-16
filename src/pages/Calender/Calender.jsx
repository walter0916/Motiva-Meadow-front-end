// npm service 
import { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

// css
import 'react-big-calendar/lib/sass/styles.scss'

const Calender = () => {
  const [allDay, setAllDay] = useState(false)
  const localizer = momentLocalizer(moment)

  const events = [
    {
      start: moment().toDate(),
      end: moment().toDate(),
      title: "Some title",
    },
  ]

  const handleAllDayChange = (e) => {
    setAllDay(e.target.checked)
  }


  return (
    <>
      <Calendar
        localizer={localizer}
        defaultDate={moment().toDate()}
        events={events}
        startAccessor="start"
        defaultView='month'
        endAccessor="end"
        style={{ 
              height: '80vh',
              width: '80vw'
              }}
      />
      <form action="">
        <label>
          Event Title:
          <input type="text" name="title" />
        </label>
        <label>
          Event Date:
          <input type="date" name="date" />
        </label>
        <label>
          All Day:
          <input type="checkbox" name="allDay" checked={allDay}  onChange={handleAllDayChange} />
        </label>
        {!allDay && (
          <>
            <label>
              Start Time:
              <input type="time" name="startTime" />
            </label>
            <label>
              End Time:
              <input type="time" name="endTime" />
            </label>
          </>
        )}
        <label>
          Add Friends:
          <select name="friends" multiple>
          <option value="friend1">Friend 1</option>
          <option value="friend2">Friend 2</option>
          </select>
        </label>
        <button type="submit">Create Event</button>
      </form>
    </>
  )
}

export default Calender