const ToDoListCard = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-y-auto h-80 p-4">
      <h2 className="text-xl font-semibold mb-4">To-Do Lists Progress</h2>
      {props.usersToDoLists.length === 0 ? (
        <p className="text-gray-500">No to-do lists</p>
      ) : (
        <ul className="space-y-2">
          {props.usersToDoLists.map((list) => (
            <li key={list._id} className="text-black rounded-md shadow-md mb-2 px-4 py-2 bg-green-400">
              <span className="font-bold">{list.title}</span> - {countCompletedTasks(list.tasks)} / {list.tasks.length}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const countCompletedTasks = (tasks) => {
  return tasks.filter(task => task.completed).length
}

export default ToDoListCard