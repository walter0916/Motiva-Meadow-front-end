// npm services 
import { useState } from "react"

const TaskForm = (props) => {
  const [listId, setListId] = useState(props.listId)
  const [formData, setFormData] = useState({
    task: '',
    color: ''
  })

  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    props.handleAddTask(listId, formData)
    setFormData({
      task: '',
      color: ''
    })
  }


  return (
    <>
      <form className="flex mt-4 iphone:w-full" onSubmit={handleSubmit}>
        <input 
          className="shadow appearance-none border rounded laptop:w-full iphone:w-40 py-2 px-3 laptop:mr-4 text-grey-darker"
          name="task" 
          placeholder="Add Todo"
          value={formData.task}
          onChange={handleChange}
        />
        <select
          className="shadow appearance-none border rounded py-2 laptop:px-3 text-center laptop:mr-4"
          name="color"
          value={formData.color}
          onChange={handleChange}
          required 
        >
          <option value="color">color</option>
          <option value="white">white</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
          <option value="yellow">yellow</option>
          <option value="purple">purple</option>
          <option value="red">red</option>
          <option value="orange">orange</option>
          <option value="pink">pink</option>
        </select>
        <button 
          className="bg-blue-500 text-white flex-no-shrink p-2 border-2 rounded font-semibold hover:bg-blue-600 ml-2"
          type='submit'
        >
          Add
        </button>
      </form>
    </>
  )
}

export default TaskForm