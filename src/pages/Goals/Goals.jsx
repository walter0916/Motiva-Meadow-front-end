// npm services 
import { useState } from "react"

// services 
import * as goalService from '../../services/goalService'

// components 
import GoalsForm from "../../components/GoalsForm/GoalsForm"

const Goals = (props) => {


  const handleAddGoal = async (goalFormData) => {
    const newGoal = await goalService.createGoal(props.user.profile, goalFormData)
  }

  return (
    <div className="w-3/4">
      hi
      <GoalsForm handleAddGoal={handleAddGoal}/> 
    </div>
  )
}

export default Goals