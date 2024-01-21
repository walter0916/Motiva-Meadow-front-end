// npm services
import { useState, useEffect } from "react"

// components 
import HobbiesForm from "../../components/HobbiesForm/HobbiesForm"

// services
import * as hobbyServices from '../../services/hobbyService'

const Hobbies = (props) => {
  const [hobbies, setHobby] = useState({})

  useEffect(() => {
    const fetchHobbies = async () => {
\
    }
  })


  const handleAddHobby = async (hobbyFormData) => {
    const newHobbyService = await hobbyServices.createHobby(props.user.profile, hobbyFormData)
  }

  return (
    <div className="w-3/4">
      <HobbiesForm handleAddHobby={handleAddHobby}/>
    </div>
  )
}

export default Hobbies