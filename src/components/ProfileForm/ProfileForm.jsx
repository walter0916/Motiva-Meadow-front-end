// npm services 
import { useState, useRef } from "react"

const ProfileForm = (props) => {
  const [formData, setFormData] = useState({
    name: props.userProfile.name,
  })
  const [profilePhoto, setProfilePhoto] = useState(props.userProfile.photo)
  const [message, setMessage] = useState('')
  const [photoData, setPhotoData] = useState({ photo: null })
  const imgInputRef = useRef(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleChangePhoto = evt => {
    const file = evt.target.files[0]
    let isFileInvalid = false
    let errMsg = ""
    const validFormats = ['gif', 'jpeg', 'jpg', 'png', 'svg', 'webp']
    const photoFormat = file.name.split('.').at(-1)
    if (file.size >= 10485760) {
      errMsg = "Image must be smaller than 10.4MB"
      isFileInvalid = true
    }
    if (!validFormats.includes(photoFormat)) {
      errMsg = "Image must be in gif, jpeg/jpg, png, svg, or webp format"
      isFileInvalid = true
    }
    setMessage(errMsg)
    if (isFileInvalid) {
      imgInputRef.current.value = null
      return
    }
    const reader = new FileReader()
    reader.onloadend = () => {
      setProfilePhoto(reader.result)
    }
    reader.readAsDataURL(file)
    setPhotoData({ photo: evt.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleEditProfile(formData, photoData)
  }


  return (
    <form className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md space-y-4" onSubmit={handleSubmit}>
      <div className="flex justify-center relative">
        <label htmlFor="photo" className="cursor-pointer">
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover cursor-pointer hover:brightness-80"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full bg-black text-white px-2 py-1 rounded opacity-0 hover:opacity-100 transition duration-300">
            Click to Change Photo
          </div>
        </label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          onChange={handleChangePhoto}
          ref={imgInputRef}
          className="hidden"
        />
      </div>
      {message && <div className="text-red-500">{message}</div>}
      <div>
        <label htmlFor="name" className="block">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          Update Profile
        </button>
      </div>
    </form>
  )
}

export default ProfileForm