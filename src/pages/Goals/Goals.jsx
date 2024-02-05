// npm services 
import { useState, useEffect } from "react"

// services 
import * as goalService from '../../services/goalService'

// components 
import GoalsForm from "../../components/GoalsForm/GoalsForm"
import GoalCard from "../../components/GoalCard/GoalCard"

const Goals = (props) => {
  const [goals, setGoals] = useState({})

  useEffect(() => {
    const fetchGoals = async () => {
      const data = await goalService.getUsersGoals(props.user.profile)
      setGoals(data)
    }
    fetchGoals()
  }, [props.user])

  const handleAddGoal = async (goalFormData) => {
    const newGoal = await goalService.createGoal(props.user.profile, goalFormData)
    setGoals((prevGoals) => [...prevGoals, newGoal])
  }

  const handleDeleteGoal = async (goalId) => {
    await goalService.deleteGoal(goalId)
    const filteredGoals = goals.filter(goal => goal._id !== goalId)
    setGoals(filteredGoals)
  }

  const handleUpdateGoalCompletion = async (goalId, complete) => {
    const formData = {
      completed : complete
    }
    await goalService.updateGoalCompletion(goalId, formData)
    const updatedGoals = await goalService.getUsersGoals(props.user.profile)
    setGoals(updatedGoals)
  }

  return (
    <div className="w-3/4">
      <GoalsForm handleAddGoal={handleAddGoal}/> 
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