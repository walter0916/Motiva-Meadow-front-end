// npm services
import { useState, useEffect } from "react"

// services
import * as profileService from '../../services/profileService'
import * as goalService from '../../services/goalService'
import * as eventService from '../../services/eventService'
import * as taskService from '../../services/taskService'

// components 
import ToDoListCard from "../../components/ToDoListCard/ToDoListCard"
import HabitsProgressCard from "../../components/HabitsProgressCard/HabitsProgressCard"
import MessagesCard from "../../components/MessagesCard/MessagesCard"
import GoalsDashboardCard from "../../components/GoalsDashboardCard/GoalsDashboardCard"
import EventsCard from "../../components/EventsCard/EventsCard"
import QuotesCard from "../../components/QuotesCard/QuotesCard"
import StatsCard from "../../components/StatsCard/StatsCard"


const Dashboard = (props) => {
  const [userProfile, setUserProfile] = useState({})
  const [preferences, setPreferences] = useState({})
  const [usersGoals, setUsersGoals] = useState({})
  const [usersEvents, setUsersEvents] = useState({})
  const [usersToDoLists, setUsersToDoLists] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserProfile = async () => {
      const data = await profileService.getProfileById(props.user.profile)
      const goalsData = await goalService.getUsersGoals(props.user.profile)
      const eventsData = await eventService.getUsersEvents(props.user.profile)
      const tasksData = await taskService.getUsersLists(props.user.profile)
      setUserProfile(data)
      setUsersGoals(goalsData)
      setUsersEvents(eventsData)
      setUsersToDoLists(tasksData)
      const preferencesData = data.preferences[0]
      setPreferences(preferencesData)
      setLoading(false)
    }
    fetchUserProfile()
  }, [props.user.profile])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <main className='bg-white-500 h-screen flex flex-wrap justify-center items-center w-3/4'>
      <div className="grid grid-cols-3 gap-4 w-full">
        {preferences.showEvents && < EventsCard userProfile={userProfile} />}
        {preferences.showToDoList && < ToDoListCard userProfile={userProfile} />}
        {preferences.showGoals && 
        < GoalsDashboardCard 
          userProfile={userProfile} 
          usersGoals={usersGoals} 
        />}
        {preferences.showQuotes && < QuotesCard userProfile={userProfile} />}
        {preferences.showHabitProgress && < HabitsProgressCard userProfile={userProfile} />}
        {preferences.seeStats && < StatsCard userProfile={userProfile} />}
        < MessagesCard userProfile={userProfile} />
      </div>
    </main>
  )
}

export default Dashboard
