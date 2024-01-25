// npm services 
import { useState } from "react"

const GoalsForm = () => {
  const [formData, setFormData] = useState({
    description: '',
    type: '',
    dueDate: ''
  })

  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormData({
      description: '',
      type: '',
      dueDate: ''
    })
  }

  return (
    <div className="flex flex-col justify-center items-center max-w-md mx-auto mb-4 p-4 bg-white rounded-md shadow-md">
      <form className="flex flex-col items-center space-y-4 w-full" onSubmit={handleSubmit}>
        <div className="mb-4 w-4/5">
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            Goal:
          </label>
          <input 
            type="text" 
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            className="w-full mx-auto py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4 w-4/5">
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            Type:
          </label>
          <select 
            name="type"
            required
            value={formData.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select a type</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="interpersonal">Interpersonal</option>
          </select>
        </div>

        <div className="mb-4 w4/5">
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            Deadline:
          </label>
          <input 
            type="date" 
            name="dueDate"
            required
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button 
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Add Goal
        </button>
      </form>
    </div>
  )
}

export default GoalsForm