// npm services
import { useState } from "react"


const ToDoListForm = (props) => {
  const [formData, setFormData] = useState({
    title:'',
    deadline:''
  })

  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    props.handleAddList(formData)
    setFormData({
      title: '',
      deadline: ''
    })
  }



  return (
    <div className='flex flex-col max-w-md mx-auto p-4 bg-white rounded-md shadow-md'>
      <form onSubmit={handleSubmit}>
        <label className="mb-4">
          <span className="block text-gray-600 text-sm font-semibold mb-2">
            List Title:
          </span>
          <input 
            type="text" 
            name="title"
            value={formData.title}
            onChange={handleChange} 
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </label>
        <label className="mb-4">
          <span className="block text-gray-600 text-sm font-semibold mb-2">
            Date:
          </span>
          <input 
            type="date" 
            name="deadline"
            value={formData.deadline}
            onChange={handleChange} 
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </label>
        <button 
        type="submit"
        className="bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-sky-700"
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default ToDoListForm