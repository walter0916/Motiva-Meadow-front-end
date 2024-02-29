import { useState } from "react"

const DeleteProfileForm = (props) => {
  const [confirmed, setConfirmed] = useState(false)
  const [email, setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleConfirm = () => {
    if (email === props.user.email) {
      setConfirmed(true)
      setErrorMessage("")
    } else {
      setErrorMessage("Incorrect email. Please try again.")
    }
  }

  const handleDelete = () => {
    console.log("Profile deleted successfully!")
    props.handleDeleteProfile()
  }

  return (
    <div className="max-w-md w-full mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      {!confirmed ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Delete Profile - Step 1
          </h2>
          <p className="text-red-500 mb-4">
            Deleting your profile is permanent and cannot be undone. Please
            proceed with caution.
          </p>
          <p className="mb-4">To confirm, please enter your email:</p>
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2 mb-4"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorMessage && (
            <p className="text-red-500 mb-4">{errorMessage}</p>
          )}
          <button
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
            onClick={handleConfirm}
          >
            Confirm Deletion
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Delete Profile - Step 2
          </h2>
          <p className="text-red-500 mb-4">
            Are you sure you want to delete your profile?
          </p>
          <p className="mb-4">Please enter your email to confirm:</p>
          <input
            type="email"
            className="border border-gray-300 rounded-md p-2 mb-4"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300 mr-2"
            onClick={() => setConfirmed(false)}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
            onClick={handleDelete}
          >
            Delete Profile
          </button>
        </div>
      )}
    </div>
  )
}

export default DeleteProfileForm
