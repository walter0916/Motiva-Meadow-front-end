// npm services
import { useState, useEffect } from "react"
import { FaPlus } from 'react-icons/fa'

// components 
import HobbiesForm from "../../components/HobbiesForm/HobbiesForm"
import HobbiesTable from "../../components/HobbiesTable/HobbiesTable"

// services
import * as hobbyService from '../../services/hobbyService'

const Hobbies = (props) => {
  const [hobbies, setHobbies] = useState({})
  const [showForm, setShowForm] = useState(false)

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

  const handleToggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div className="w-3/4">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold mr-4">Hobbies</h1>
        <FaPlus className="cursor-pointer text-2xl text-green-500" onClick={handleToggleForm} />
      </div>
      {showForm && <HobbiesForm handleAddHobby={handleAddHobby}/>}
      <HobbiesTable hobbies={hobbies} handleUpdateHobbyProgress={handleUpdateHobbyProgress}/>
    </div>
  )
}

export default Hobbies