// npm services
import { useState, useEffect } from "react"

// components 
import HobbiesForm from "../../components/HobbiesForm/HobbiesForm"
import HobbiesTable from "../../components/HobbiesTable/HobbiesTable"

// services
import * as hobbyService from '../../services/hobbyService'

const Hobbies = (props) => {
  const [hobbies, setHobbies] = useState({})

  useEffect(() => {
    const fetchHobbies = async () => {
      const data = await hobbyService.getUsersHobbies(props.user.profile)
      setHobbies(data)
    }
    fetchHobbies()
  }, [props.user])


  const handleAddHobby = async (hobbyFormData) => {
    const newHobby = await hobbyService.createHobby(props.user.profile, hobbyFormData)
    setHobbies((prevHobbies) => [...prevHobbies, newHobby])
  }

  const handleUpdateHobbyProgress = async (hobbyId, hobbyFormData) => {
    await hobbyService.updateHobbyProgress(hobbyId, hobbyFormData)
  }

  return (
    <div className="w-3/4">
      <HobbiesForm handleAddHobby={handleAddHobby}/>
      <HobbiesTable hobbies={hobbies} handleUpdateHobbyProgress={handleUpdateHobbyProgress}/>
    </div>
  )
}

export default Hobbies