// npm services
import { useState } from "react"

const HobbyCheckInput = (props) => {
  const [isChecked, setChecked] = useState(false)

  return (
    <td key={props.day} className="py-2 px-1 border border-gray-300 text-center">
      <input type="checkbox" checked={isChecked} className="w-4 h-4 m-auto" />
    </td>
  )
}

export default HobbyCheckInput