// npm services 
import { useState } from "react"

const TaskCheckInput = (props) => {
  const [isChecked, setChecked] = useState(props.task.completed)

  const handleCheckChange = () => {
    props.handleTaskCompletion(props.task._id, props.toDoListId, isChecked)
    setChecked(!isChecked)
  }

  return (
    <div className="checkbox-wrapper-15">
      <input 
        className="inp-cbx hidden" 
        id={`cbx-${props.task._id}`} 
        type="checkbox" 
        checked={isChecked}
        onChange={handleCheckChange}
      />
      <label className="cbx" htmlFor={`cbx-${props.task._id}`}>
        <span>
          <svg width="12px" height="9px" viewBox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline>
          </svg>
        </span>
      </label>
    </div>
  )
}

export default TaskCheckInput