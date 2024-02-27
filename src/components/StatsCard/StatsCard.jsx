const StatsCard = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-y-auto h-80 p-4">
      Stats
      <div className="text-black rounded-md shadow-md mb-2 px-4 py-2 bg-sky-200">
        <p className="text-green-600">Goals Completed: {props.usersStats[0].goalsCompleted}</p>
        <p className="text-orange-600">Hobbies Streak: {props.usersStats[0].hobbiesStreak}</p>
        <p className="text-blue-600">To-Do List Streak: {props.usersStats[0].toDoListStreak}</p>
        <p className="text-gray-800">To-Do List Completed: {props.usersStats[0].toDoListCompleted}</p>
      </div>
    </div>
  )
}

export default StatsCard