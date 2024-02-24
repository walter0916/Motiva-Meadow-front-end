// npm services 
import moment from "moment"
import { FaTrash } from "react-icons/fa"

const GoalCard = (props) => {
  const daysLeft = moment(props.goal.dueDate).diff(moment(), 'days')

  return (
    <div className={`p-4 mb-4 rounded-md shadow-md ${props.goal.completed ? 'bg-green-100' : 'bg-blue-100'}`}>
      <h2 className="text-xl font-semibold mb-2 text-blue-800">
        {props.goal.description}
      </h2>
      <p className={`mb-2 ${daysLeft > 7 ? 'text-green-600' : 'text-orange-600'}`}>
        {daysLeft > 0 ? `${daysLeft} days left` : (daysLeft < 0 ? `past due` : "Due today")} 
      </p>
      <p className="text-sm text-gray-500">
        Due Date: {moment(props.goal.dueDate).format("MMMM D, YYYY")}
      </p>
      <div>
        <button className="mr-2" onClick={() => props.handleDeleteGoal(props.goal._id)}>
          <FaTrash /> 
        </button>
        {!props.goal.completed ? 
          <button onClick={() => props.handleUpdateGoalCompletion(props.goal._id, true)} className="bg-green-500 text-white px-2 py-1 rounded-md">
            Complete
          </button> 
          : 
          <button onClick={() => props.handleUpdateGoalCompletion(props.goal._id, false)} className="bg-blue-500 text-white px-2 py-1 rounded-md">
            Uncomplete
          </button>
        }
      </div>
    </div>
  )
}

export default GoalCard
