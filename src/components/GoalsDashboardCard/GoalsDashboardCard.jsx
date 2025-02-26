const GoalsDashboardCard = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-y-auto h-80 p-4">
      <h2 className="text-2xl font-semibold mb-4">Goals</h2>
      {props.usersGoals.length === 0 ? (
        <p className="text-gray-500">No goals</p>
      ) : (
        <ul className="space-y-2">
          {props.usersGoals.map((goal) => 
            <li key={goal._id} className={`text-black rounded-md shadow-md mb-2 px-4 py-2 ${goal.completed ? 'bg-blue-300': 'bg-orange-400' }`}>
              <span className="font-bold">{goal.description}</span> - {goal.completed ? 'Completed' : 'Incomplete'}
            </li>
          )}
        </ul>
      )}
    </div>
  )
}

export default GoalsDashboardCard