// npm services
import { useState, useEffect } from "react"
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from "react-icons/fa"
import Lottie from "react-lottie"

// components 
import HabitsForm from "../../components/HabitsForm/HabitsForm"
import HabitsTable from "../../components/HabitsTable/HabitsTable"

// services
import * as habitService from '../../services/habitService'

//animation
import animationData from '../../assets/loading-animation.json'

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

  const defaultOptions = {
    loop:true,
    autoplay:true,
    animationData:animationData,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  if (loading) {
    return (
      <div className="px-4 py-8 laptop:w-4/5 iphone:w-full flex flex-col justify-center items-center bg-meadow-3rd bg-fixed bg-cover bg-center">
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    )
  }

  return (
    <div className="laptop:w-4/5 iphone:w-full p-5 bg-meadow-3rd bg-fixed bg-cover bg-center overflow-y-auto font-poppins">
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