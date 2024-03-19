// npm services 
import { FaTrash } from 'react-icons/fa'

// components 
import TaskForm from "../TaskForm/TaskForm"
import TaskCheckInput from '../TaskCheckInput/TaskCheckInput'

// css
import './ToDoList.css' 

const ToDoList = (props) => {

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const options = {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    }
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date)
    return formattedDate

  }


  return (
    <div>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-poppins">
        <div className="bg-[#ffffc8] rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">{props.toDoList.title} {formatDate(props.toDoList.deadline)}</h1>
            <TaskForm handleAddTask={props.handleAddTask} listId={props.toDoList._id}/>
          </div>
          <div>
            {props.toDoList.tasks.length ?
            (props.toDoList.tasks.map(task => 
              <div key={task._id} className="flex mb-4 items-center">
                <p className={`${task.color} ${task.completed ? ('completed') : ('notCompleted')} w-full text-grey-darkest`}>{task.task}</p>
                <TaskCheckInput 
                  task={task} 
                  handleTaskCompletion={props.handleTaskCompletion}
                  toDoListId={props.toDoList._id}
                />
                <button className="flex-no-shrink p-2 ml-2 rounded text-red border-red hover:text-red-500 hover:bg-red" onClick={() => props.handleDeleteTask(task._id, props.toDoList._id)}>X</button>
              </div>)) : ('')
            }
            <button className="flex-no-shrink p-2 ml-2 text-red border-red hover:text-red-500 hover:bg-red"onClick={() => props.handleArchiveList(props.toDoList._id)} >Archive</button>
            <button className="flex-no-shrink p-2 ml-2 text-red border-red hover:text-red-500 hover:bg-red" onClick={() => props.handleDeleteList(props.toDoList._id)}><FaTrash /></button>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default ToDoList