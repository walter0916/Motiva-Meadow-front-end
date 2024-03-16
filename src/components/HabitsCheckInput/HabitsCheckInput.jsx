// npm services
import { useState } from "react"

// css
import './HabitsCheckInput.css'

const HabitsCheckInput = (props) => {
  const [isChecked, setChecked] = useState(props.hobby.completedDays.includes(props.day))

  const handleCheckChange = () => {
    setChecked(!isChecked)
    const formData = {
      isChecked: !isChecked,
      currentDay: props.day
    }
    props.handleUpdateHobbyProgress(props.hobbyId, formData)
  }

  const checkboxId = `cb-${props.hobbyId}-${props.day}`

  return (
    <td key={props.day} className="py-2 px-1 border border-gray-300 text-center ">
      <div className={`checkbox-wrapper-10 w-full text-center flex items-center justify-center${isChecked ? 'tgl-flip' : ''}`}>
        <input
          className="tgl tgl-flip m-auto text-center"
          id={checkboxId}
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckChange}
        />
        <label
          className="tgl-btn text-center m-auto"
          data-tg-off="Nope"
          data-tg-on="Yeah!"
          htmlFor={checkboxId}
        ></label>
      </div>
    </td>
  )
}

export default HabitsCheckInput