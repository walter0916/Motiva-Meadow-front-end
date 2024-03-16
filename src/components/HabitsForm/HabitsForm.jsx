// npm services 
import { useState} from "react"

const HabitsForm = (props) => {
  const [formData,setFormData] = useState({
    title:'',
    type:'',
    weeklyGoal: 1
  })


  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    props.handleAddHabit(formData)
    setFormData({
      title: '',
      type: '',
      weeklyGoal: 1
    })
  }


  return (
    <div className="flex flex-col justify-center items-center max-w-md mx-auto mb-4 p-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add A Habit</h2>
      <form className="flex flex-col items-center space-y-4 w-full" onSubmit={handleSubmit}>
        <div className="mb-4 w-4/5">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Habit Title:
          </label>
          <input
            className="w-full mx-auto py-2 border border-gray-300 rounded-md"
            type="text"
            name="title"
            value={formData.title}
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 w-4/5">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Type of Habit:
          </label>
          <select
            className="w-full mx-auto py-2 border border-gray-300 rounded-md"
            name="type"
            value={formData.type}
            required
            onChange={handleChange}
          >
            <option value="">select an option</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="interpersonal">Interpersonal</option>
          </select>
        </div>
        <div className="mb-4 w-4/5">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Weekly Goal:
          </label>
          <input
            className="w-full mx-auto py-2 border border-gray-300 rounded-md"
            type="number"
            name="weeklyGoal"
            min={1}
            value={formData.weeklyGoal}
            required
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 font-semibold rounded-md hover:bg-blue-600"
        >
          Add Habit
        </button>
      </form>
    </div>
  )
}

export default HabitsForm