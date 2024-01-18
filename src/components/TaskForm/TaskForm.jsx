// npm services 
import { useState } from "react"

const TaskForm = () => {
  const [formData, setFormData] = useState({
    task: '',
    color: ''
  })

  return (
    <>
      <form className="flex mt-4">
        <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" 
          placeholder="Add Todo" 
        />
        <button 
          className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
          type='submit'
        >
          Add
        </button>
        <select 
          name="color" 
        >
          <option value="white">white</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
          <option value="yellow">yellow</option>
          <option value="purple">purple</option>
          <option value="red">red</option>
          <option value="orange">orange</option>
          <option value="pink">pink</option>
        </select>
      </form>
    </>
  )
}

export default TaskForm