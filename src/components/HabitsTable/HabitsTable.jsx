// components 
import HabitsCheckInput from "../HabitsCheckInput/HabitsCheckInput"

const HabitsTable = (props) => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 bg-white shadow-md">
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
            props.habits.map((habit) => (
              <tr key={habit._id}>
                <td className="py-2 px-4 border border-gray-300 text-center">
                  {habit.title} 
                  <button onClick={() => props.handleDeleteHabit(habit._id)}>x</button>
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