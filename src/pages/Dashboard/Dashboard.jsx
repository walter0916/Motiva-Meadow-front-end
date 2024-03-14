// npm services
import { useState, useEffect } from "react"
import Lottie from "react-lottie"

// services
import * as profileService from '../../services/profileService'
import * as goalService from '../../services/goalService'
import * as eventService from '../../services/eventService'
import * as taskService from '../../services/taskService'
import * as habitService from '../../services/habitService'
import * as statService from '../../services/statService'
import * as messageService from '../../services/messageService'
import * as quoteService from '../../services/quoteService'

// components 
import ToDoListCard from "../../components/ToDoListCard/ToDoListCard"
import HabitsProgressCard from "../../components/HabitsProgressCard/HabitsProgressCard"
import MessagesCard from "../../components/MessagesCard/MessagesCard"
import GoalsDashboardCard from "../../components/GoalsDashboardCard/GoalsDashboardCard"
import EventsCard from "../../components/EventsCard/EventsCard"
import QuotesCard from "../../components/QuotesCard/QuotesCard"
import StatsCard from "../../components/StatsCard/StatsCard"

//animation
import animationData from '../../../public/loading-animation.json'


const Dashboard = (props) => {
  const [userProfile, setUserProfile] = useState({})
  const [preferences, setPreferences] = useState({})
  const [usersGoals, setUsersGoals] = useState({})
  const [usersEvents, setUsersEvents] = useState({})
  const [usersToDoLists, setUsersToDoLists] = useState({})
  const [usersHabits, setUsersHabits ] = useState({})
  const [usersStats, setUsersStats] = useState({})
  const [usersMessages, setUsersMessages] = useState({})
  const [quotes, setQuotes] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserProfile = async () => {
      const data = await profileService.getProfileById(props.user.profile)
      const goalsData = await goalService.getUsersGoals(props.user.profile)
      const eventsData = await eventService.getUsersEvents(props.user.profile)
      const tasksData = await taskService.getUsersLists(props.user.profile)
      const habitsData = await habitService.getUsersHabits(props.user.profile)
      const statsData = await statService.getUsersStats(props.user.profile)
      const messagesData = await messageService.getUserMessages(props.user.profile)
      const quotesData = await quoteService.getQuotes()

      const filteredEvents = eventsData.filter(event => new Date(event.start) > new Date())

      filteredEvents.sort((a, b) => new Date(a.start) - new Date(b.start))

      setUserProfile(data)
      setUsersGoals(goalsData)
      setUsersEvents(filteredEvents)
      setUsersToDoLists(tasksData)
      setUsersHabits(habitsData)
      setUsersStats(statsData)
      setUsersMessages(messagesData)
      setQuotes(quotesData)
      const preferencesData = data.preferences[0]
      setPreferences(preferencesData)
      setLoading(false)
    }
    fetchUserProfile()
  }, [props.user.profile])

  const handleDeleteMessage = async (messageId) => {
    await messageService.deleteMessage(messageId)
    const filteredData = usersMessages.filter((message) => message._id !== messageId)
    setUsersMessages(filteredData)
  }

  const defaultOptions = {
    loop:true,
    autoplay:true,
    animationData:animationData,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  if (loading) {
    return (
      <div className="px-4 py-8 w-4/5 flex flex-col justify-center items-center bg-gradient-to-r from-[#29bf12] via-[#abff4f] to-[#29bf12]">
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    )
  }

  return (
    <main className='bg-gradient-to-r from-[#29bf12] via-[#abff4f] to-[#29bf12] p-8 flex items-center h-screen w-4/5'>
      <div className="grid grid-cols-3 gap-4 w-full">
        {preferences.showEvents && 
        < EventsCard 
          userProfile={userProfile}
          usersEvents={usersEvents}
        />}
        {preferences.showToDoList && 
        < ToDoListCard 
          userProfile={userProfile}
          usersToDoLists={usersToDoLists}
        />}
        {preferences.showGoals && 
        < GoalsDashboardCard 
          userProfile={userProfile} 
          usersGoals={usersGoals} 
        />}
        {preferences.showQuotes && 
        < QuotesCard 
          userProfile={userProfile}
          quotes={quotes}
        />}
        {preferences.showHabitProgress && 
        < HabitsProgressCard 
          userProfile={userProfile}
          usersHabits={usersHabits}
        />}
        {preferences.seeStats && 
        < StatsCard 
          userProfile={userProfile}
          usersStats={usersStats}
        />}
        < MessagesCard 
          userProfile={userProfile}
          usersMessages={ usersMessages }
          handleDeleteMessage={ handleDeleteMessage }
        />
      </div>
    </main>
  )
}

export default Dashboard
