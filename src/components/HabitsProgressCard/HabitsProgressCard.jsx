const HabitsProgressCard = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-y-auto h-80 p-4">
      Habits Progress
      <ul className="space-y-2">
        {props.usersHabits.map((habit) => 
          <li key={habit._id} className="text-black rounded-md shadow-md mb-2 px-4 py-2 bg-sky-400">
            <span className="font-bold">{habit.title}</span> - {habit.currentNumber} / {habit.weeklyGoal} Streak: <span className="font-bold">{habit.currentStreak} 🔥</span>
          </li>
        )}
      </ul>
    </div>
  )
}

export default HabitsProgressCard