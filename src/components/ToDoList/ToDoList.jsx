// components 
import TaskForm from "../TaskForm/TaskForm"

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
    const formattedDate = date.toLocaleDateString('en-US', options)
    return formattedDate
  }

  const completeTask = ()=> {

  }


  return (
    <div>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">{props.toDoList.title} {formatDate(props.toDoList.deadline)}</h1>
            <TaskForm handleAddTask={props.handleAddTask} listId={props.toDoList._id}/>
          </div>
          <div>
            {props.toDoList.tasks.length ?
            (props.toDoList.tasks.map(task => 
              <div key={task._id} className="flex mb-4 items-center">
                <p className={`${task.color} ${task.completed ? ('completed') : ('notCompleted')} w-full text-grey-darkest`}>{task.task}</p>
                { task.completed ? <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-red-500 text-green border-green hover:bg-green" onClick={() => props.handleTaskCompletion(task._id, props.toDoList._id, true)}> unDone</button> :
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-red-500 text-green border-green hover:bg-green" onClick={() => props.handleTaskCompletion(task._id, props.toDoList._id, false)}>Done</button>}
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-red-500 hover:bg-red">X</button>
              </div>)) : ('')
            }
            <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-red-500 hover:bg-red">Archive</button>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default ToDoList