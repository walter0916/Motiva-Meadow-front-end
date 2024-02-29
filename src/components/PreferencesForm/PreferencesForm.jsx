// npm services
import { useState } from "react"

const PreferencesForm = (props) => {
  const initialFormData = props.userProfile.preferences[0]
    ? {
      showEvents: props.userProfile.preferences[0].showEvents,
      showToDoList: props.userProfile.preferences[0].showToDoList,
      showGoals: props.userProfile.preferences[0].showGoals,
      showQuotes: props.userProfile.preferences[0].showQuotes,
      showHabitProgress: props.userProfile.preferences[0].showHabitProgress,
      seeStats: props.userProfile.preferences[0].seeStats,
    }
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

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleEditProfilePreferences(formData)
  }

  return (
    <form className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
      <div className="flex flex-col">
          <label className="inline-flex items-center ">
            <span className="w-3/4">Show Events</span>
            <input
              type="checkbox"
              className="form-checkbox text-green-500 w-1/4"
              name="showEvents"
              checked={formData.showEvents}
              onChange={handleChange}
            />
          </label>
          <label className="inline-flex items-center">
            <span className="w-3/4">Show To-Do List</span>
            <input
              type="checkbox"
              className="form-checkbox text-green-500 w-1/4"
              name="showToDoList"
              checked={formData.showToDoList}
              onChange={handleChange}
            />
          </label>
          <label className="inline-flex items-center">
            <span className="w-3/4">Show Goals</span>
            <input
              type="checkbox"
              className="form-checkbox text-green-500 w-1/4"
              name="showGoals"
              checked={formData.showGoals}
              onChange={handleChange}
            />
          </label>
          <label className="inline-flex items-center">
            <span className="w-3/4">Show Quotes</span>
            <input
              type="checkbox"
              className="form-checkbox text-green-500 w-1/4"
              name="showQuotes"
              checked={formData.showQuotes}
              onChange={handleChange}
            />
          </label>
          <label className="inline-flex items-center">
            <span className="w-3/4">Show Habit Progress</span>
            <input
              type="checkbox"
              className="form-checkbox text-green-500 w-1/4"
              name="showHabitProgress"
              checked={formData.showHabitProgress}
              onChange={handleChange}
            />
          </label>
          <label className="inline-flex items-center">
            <span className="w-3/4">See Stats</span>
            <input
              type="checkbox"
              className="form-checkbox text-green-500 w-1/4"
              name="seeStats"
              checked={formData.seeStats}
              onChange={handleChange}
            />
          </label>
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