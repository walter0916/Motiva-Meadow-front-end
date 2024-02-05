// npm services 
import moment from "moment"

const GoalCard = (props) => {
  const daysLeft = moment(props.goal.dueDate).diff(moment(), 'days')

  return (
    <div className="bg-blue-100 p-4 mb-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-2 text-blue-800">
        {props.goal.description}
      </h2>
      <p className={`mb-2 ${daysLeft > 7 ? 'text-green-600' : 'text-orange-600'}`}>
        {daysLeft > 0 ? `${daysLeft} days left` : "Due today"}
      </p>
      <p className="text-sm text-gray-500">
        Due Date: {moment(props.goal.dueDate).format("MMMM D, YYYY")}
      </p>
      <div>
        <button onClick={() => props.handleDeleteGoal(props.goal._id)}>Delete</button>
        {!props.goal.completed ? 
        <button onClick={() => props.handleUpdateGoalCompletion(props.goal._id, true)}>
          Complete
        </button> 
        : 
        <button onClick={() => props.handleUpdateGoalCompletion(props.goal._id, false)}>
          unComplete
        </button>
        }
      </div>
    </div>
  )
}

export default GoalCard