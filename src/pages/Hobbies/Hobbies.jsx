// npm services
import { useState, useEffect } from "react"

// components 
import HobbiesForm from "../../components/HobbiesForm/HobbiesForm"
import HobbiesTable from "../../components/HobbiesTable/HobbiesTable"

// services
import * as hobbyServices from '../../services/hobbyService'

const Hobbies = (props) => {
  const [hobbies, setHobbies] = useState({})

  useEffect(() => {
    const fetchHobbies = async () => {
      const data = await hobbyServices.getUsersHobbies(props.user.profile)
      setHobbies(data)
    }
    fetchHobbies()
  }, [props.user])


  const handleAddHobby = async (hobbyFormData) => {
    const newHobbyService = await hobbyServices.createHobby(props.user.profile, hobbyFormData)
  }

  return (
    <div className="w-3/4">
      <HobbiesForm handleAddHobby={handleAddHobby}/>
      <HobbiesTable hobbies={hobbies} />
    </div>
  )
}

export default Hobbies