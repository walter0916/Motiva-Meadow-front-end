import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'


const Calender = () => {
  const localizer = momentLocalizer(moment)

  return (
    <div>
    <Calendar
      localizer={localizer}
      // events={}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
    </div>
  )
}

export default Calender