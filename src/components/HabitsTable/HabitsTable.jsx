// npm services 
import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

// components 
import HabitsCheckInput from "../HabitsCheckInput/HabitsCheckInput"

const HabitsTable = (props) => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);


  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 bg-white shadow-md font-kalam">
        <thead>
          <tr>
            <th className="py-2 px-4 border border-gray-300 bg-blue-500 text-white">Habit</th>
            {daysOfWeek.map((day, index) => (
              <th key={index} className="py-2 px-1 border border-gray-300 bg-blue-500 text-white">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.habits.length ? (
            props.habits.map((habit, rowIndex) => (
              <tr 
                key={habit._id}
                className={rowIndex === hoveredRowIndex ? 'bg-gray-100' : ''}
                onMouseEnter={() => setHoveredRowIndex(rowIndex)}
                onMouseLeave={() => setHoveredRowIndex(null)}
              >
                <td className=" border border-gray-300">
                  <div className=''>
                  <button
                    className=" text-red-500 cursor-pointer"
                    onClick={() => props.handleDeleteHabit(habit._id)}
                  >
                    <FaTrashAlt />
                  </button>
                  <span className="w-2/3 ml-2">{habit.title}</span>
                  </div>
                </td>
                {daysOfWeek.map((day, index) => (
                  <HabitsCheckInput
                    key={index}
                    day={day}
                    handleUpdateHobbyProgress={props.handleUpdateHabitProgress}
                    hobbyId={habit._id}
                    hobby={habit}
                  />
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} className="py-2 px-4 border border-gray-300 text-center">
                No habits found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default HabitsTable