// npm services 
import { useState, useEffect } from "react"

// services 
import * as goalService from '../../services/goalService'

// components 
import GoalsForm from "../../components/GoalsForm/GoalsForm"

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
  }

  return (
    <div className="w-3/4">
      <GoalsForm handleAddGoal={handleAddGoal}/> 
    </div>
  )
}

export default Goals