// npm services
import { useState } from "react"

const PreferencesForm = (props) => {
  const initialFormData = props.userProfile.preferences
    ? props.userProfile.preferences
    : {
        showEvents: false,
        showToDoList: false,
        showGoals: false,
        showQuotes: false,
        showHabitProgress: false,
        seeStats: false,
      }

  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked })
  }

  return (
    <form className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col">
        <div className="mb-4">
          <label className="inline-flex items-center">
            <span className="mr-2">Show Events</span>
            <input
              type="checkbox"
              className="form-checkbox text-green-500"
              name="showEvents"
              checked={formData.showEvents}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <span className="mr-2">Show To-Do List</span>
            <input
              type="checkbox"
              className="form-checkbox text-green-500"
              name="showToDoList"
              checked={formData.showToDoList}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <span className="mr-2">Show Goals</span>
            <input
              type="checkbox"
              className="form-checkbox text-green-500"
              name="showGoals"
              checked={formData.showGoals}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <span className="mr-2">Show Quotes</span>
            <input
              type="checkbox"
              className="form-checkbox text-green-500"
              name="showQuotes"
              checked={formData.showQuotes}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <span className="mr-2">Show Habit Progress</span>
            <input
              type="checkbox"
              className="form-checkbox text-green-500"
              name="showHabitProgress"
              checked={formData.showHabitProgress}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <span className="mr-2">See Stats</span>
            <input
              type="checkbox"
              className="form-checkbox text-green-500"
              name="seeStats"
              checked={formData.seeStats}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
      >
        Save Preferences
      </button>
    </form>
  )
}

export default PreferencesForm