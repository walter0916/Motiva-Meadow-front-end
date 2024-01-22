// components 
import HobbyCheckInput from "../HobbyCheckInput/HobbyCheckInput"

const HobbiesTable = (props) => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border border-gray-300">Hobby</th>
            {daysOfWeek.map((day) => (
              <th key={day} className="py-2 px-1 border border-gray-300">
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
                {daysOfWeek.map((day) => (
                  <HobbyCheckInput key={day._id} day={day} />
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} className="py-2 px-4 border border-gray-300">
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