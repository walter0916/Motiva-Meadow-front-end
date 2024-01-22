// npm services
import { useState } from "react"

const HobbyCheckInput = (props) => {
  const [isChecked, setChecked] = useState(props.hobby.completedDays.includes(props.day))

  const handleCheckChange = () => {
    setChecked(!isChecked)
    const formData = {
      isChecked: !isChecked,
      currentDay: props.day
    }
    props.handleUpdateHobbyProgress(props.hobbyId, formData)
  }

  return (
    <td key={props.day} className="py-2 px-1 border border-gray-300 text-center">
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={handleCheckChange} 
        className={`w-4 h-4 m-auto ${isChecked ? 'bg-blue-500' : 'bg-gray-300'}`}
      />
    </td>
  )
}

export default HobbyCheckInput