// npm services 
import { useState, useEffect } from "react"
import Lottie from "react-lottie"

// services 
import * as goalService from '../../services/goalService'

// components 
import GoalsForm from "../../components/GoalsForm/GoalsForm"
import GoalCard from "../../components/GoalCard/GoalCard"

//animation
import animationData from '../../assets/loading-animation.json'

const Goals = (props) => {
  const [goals, setGoals] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchGoals = async () => {
      const data = await goalService.getUsersGoals(props.user.profile)
      const sortedGoals = data.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
      setGoals(sortedGoals)
      setLoading(false)
    }
    fetchGoals()
  }, [props.user])

  const handleAddGoal = async (goalFormData) => {
    const newGoal = await goalService.createGoal(props.user.profile, goalFormData)
    const updatedGoals = [...goals, newGoal]
    const sortedGoals = updatedGoals.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    setGoals(sortedGoals)
  }

  const handleDeleteGoal = async (goalId) => {
    await goalService.deleteGoal(goalId)
    const filteredGoals = goals.filter(goal => goal._id !== goalId)
    const sortedGoals = filteredGoals.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    setGoals(sortedGoals)
  }

  const handleUpdateGoalCompletion = async (goalId, complete) => {
    const formData = {
      completed : complete
    }
    await goalService.updateGoalCompletion(goalId, formData)
    const updatedGoals = await goalService.getUsersGoals(props.user.profile)
    const sortedGoals = updatedGoals.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    setGoals(sortedGoals)
  }

  const handleTypeChange = async (event) => {
    const type = event.target.value
    const goals = await goalService.getUsersGoals(props.user.profile)
    if (type === 'all') {
      const sortedGoals = goals.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
      setGoals(sortedGoals)
    } else {
      const filteredGoals = goals.filter((goal) => goal.type === type)
      const sortedGoals = filteredGoals.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
      setGoals(sortedGoals)
    }
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
      <div className="px-4 py-8 w-4/5 flex flex-col justify-center items-center bg-meadow-3rd bg-cover bg-fixed bg-center">
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    )
  }

  return (
    <div className="w-4/5 bg-meadow-3rd bg-cover bg-center bg-no-repeat bg-fixed overflow-y-auto p-5 h-max min-h-full">
      <GoalsForm handleAddGoal={handleAddGoal}/>
      <select name="type" id="type3" onChange={handleTypeChange}>
        <option value="all">All Types</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="interpersonal">Interpersonal</option>
      </select>
      <div className="mt-8">
        {goals.length > 0 ? (
          goals.map((goal) => (
            <GoalCard 
              key={goal._id} 
              goal={goal}
              handleDeleteGoal={handleDeleteGoal}
              handleUpdateGoalCompletion={handleUpdateGoalCompletion}
            />
          ))
        ) : (
          <p>No goals found.</p>
        )}
      </div>
    </div>
  )
}

export default Goals