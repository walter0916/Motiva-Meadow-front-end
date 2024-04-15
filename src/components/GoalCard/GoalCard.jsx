// npm services 
import moment from "moment"
import { FaTrash } from "react-icons/fa"

const GoalCard = (props) => {
  const daysLeft = moment(props.goal.dueDate).diff(moment(), 'days')

  return (
    <div className={`p-4 mb-4 rounded-md shadow-md font-poppins ${props.goal.completed ? 'bg-green-100' : 'bg-orange-100'}`}>
      <h2 className="text-xl font-semibold mb-2 text-blue-800">
        {props.goal.description}
      </h2>
      <p className={`mb-2 font-semibold ${daysLeft > 7 ? 'text-green-600' : 'text-red-600'}`}>
        {daysLeft > 0 ? `${daysLeft} Days Left` : (daysLeft < 0 ? `Past Due` : "Due today")} 
      </p>
      <p className="text-sm text-gray-500">
        Due Date: {moment(props.goal.dueDate).format("MMMM D, YYYY")}
      </p>
      <div>
        <button className="mr-2" onClick={() => props.handleDeleteGoal(props.goal._id)}>
          <FaTrash /> 
        </button>
        {daysLeft > 0 ? 
        (!props.goal.completed ? 
          <button onClick={() => props.handleUpdateGoalCompletion(props.goal._id, true)} className="bg-green-500 font-semibold text-white px-2 py-1 rounded-md hover:bg-green-600">
            Complete
          </button> 
          : 
          <button onClick={() => props.handleUpdateGoalCompletion(props.goal._id, false)} className="bg-orange-500 font-semibold text-white px-2 py-1 rounded-md hover:bg-orange-600">
            Uncomplete
          </button>
        ) : ''} 
      </div>
    </div>
  )
}

export default GoalCard
