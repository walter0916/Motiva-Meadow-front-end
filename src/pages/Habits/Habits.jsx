// npm services
import { useState, useEffect } from "react"
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from "react-icons/fa"

// components 
import HabitsForm from "../../components/HabitsForm/HabitsForm"
import HabitsTable from "../../components/HabitsTable/HabitsTable"

// services
import * as habitService from '../../services/habitService'

const Habits = (props) => {
  const [habits, setHabits] = useState({})
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchHabits = async () => {
      const data = await habitService.getUsersHabits(props.user.profile)
      setHabits(data)
      setLoading(false)
    }
    fetchHabits()
  }, [props.user])


  const handleAddHabit = async (habitFormData) => {
    const newHabit = await habitService.createHabit(props.user.profile, habitFormData)
    setHabits((prevHabits) => [...prevHabits, newHabit])
  }

  const handleDeleteHabit = async (habitId) => {
    await habitService.deleteHabit(habitId)
    const updatedHabits = habits.filter((habit) => habit._id !== habitId)
    setHabits(updatedHabits)
  }

  const handleUpdateHabitProgress = async (habitId, habitFormData) => {
    await habitService.updateHabitProgress(habitId, habitFormData)
  }

  const handleToggleForm = () => {
    setShowForm(!showForm)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="w-4/5 p-5 bg-gradient-to-r from-[#29bf12] via-[#abff4f] to-[#29bf12]">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold mr-4">Habits</h1>
        {showForm ? (
          <FaMinus className="cursor-pointer text-2xl text-white hover:text-black" onClick={handleToggleForm} />
        ) : (
          <FaPlus className="cursor-pointer text-2xl text-white hover:text-black" onClick={handleToggleForm} />
        )}
      </div>
      {showForm && <HabitsForm handleAddHabit={handleAddHabit}/>}
      <HabitsTable 
        habits={habits} 
        handleUpdateHabitProgress={handleUpdateHabitProgress}
        handleDeleteHabit={handleDeleteHabit}
      />
    </div>
  )
}

export default Habits