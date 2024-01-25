// npm services 
import moment from "moment"

const GoalCard = (props) => {
  const daysLeft = moment(props.goal.dueDate).diff(moment(), 'days')

  return (
    <div className="bg-white p-4 mb-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-2">{props.goal.description}</h2>
      <p className="text-gray-600 mb-2">
        {daysLeft > 0 ? `${daysLeft} days left` : "Due today"}
      </p>
      <p className="text-sm text-gray-500">
        Due Date: {moment(props.goal.dueDate).format("MMMM D, YYYY")}
      </p>
    </div>
  )
}

export default GoalCard