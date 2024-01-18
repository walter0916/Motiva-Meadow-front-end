// npm services 

// services 
import * as taskService from '../../services/taskService'

// components 
import ToDoListForm from "../../components/ToDoListForm/ToDoListForm"

// css

const Tasks = (props) => {

  const handleAddList = async (listFormData) => {
    const newList = await taskService.createToDoList(props.user.profile, listFormData)
  }

  return (
    <div className="w-3/4">
      Create To Do List
      <ToDoListForm user={props.user} handleAddList={handleAddList}/>
    </div>
  )
}

export default Tasks