// components 
import HobbyCheckInput from "../HobbyCheckInput/HobbyCheckInput"

const HobbiesTable = (props) => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 bg-white shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border border-gray-300 bg-blue-500 text-white">Hobby</th>
            {daysOfWeek.map((day, index) => (
              <th key={index} className="py-2 px-1 border border-gray-300 bg-blue-500 text-white">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.hobbies.length ? (
            props.hobbies.map((hobby) => (
              <tr key={hobby._id}>
                <td className="py-2 px-4 border border-gray-300 text-center">{hobby.title}</td>
                {daysOfWeek.map((day, index) => (
                  <HobbyCheckInput
                    key={index}
                    day={day}
                    handleUpdateHobbyProgress={props.handleUpdateHobbyProgress}
                    hobbyId={hobby._id}
                    hobby={hobby}
                  />
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} className="py-2 px-4 border border-gray-300 text-center">
                No hobbies found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default HobbiesTable