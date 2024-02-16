// npm services
import { useState, useEffect } from "react"

// services
import * as profileService from '../../services/profileService'

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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserProfile = async () => {
      const data = await profileService.getProfileById(props.user.profile)
      setUserProfile(data)
      const preferencesData = data.preferences
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
      {preferences[0].showEvents && <EventsCard userProfile={userProfile} />}
      {preferences[0].showToDoList && <ToDoListCard userProfile={userProfile} />}
      {preferences[0].showGoals && <GoalsDashboardCard userProfile={userProfile} />}
      {preferences[0].showQuotes && <QuotesCard userProfile={userProfile} />}
      {preferences[0].showHabitProgress && <HabitsProgressCard userProfile={userProfile} />}
      {preferences[0].seeStats && <StatsCard userProfile={userProfile} />}
      < MessagesCard userProfile={userProfile}/>
    </main>
  )
}

export default Dashboard
