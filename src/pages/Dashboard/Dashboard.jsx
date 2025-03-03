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
import * as invitationService from '../../services/invitationService'

// components 
import ToDoListCard from "../../components/ToDoListCard/ToDoListCard"
import HabitsProgressCard from "../../components/HabitsProgressCard/HabitsProgressCard"
import MessagesCard from "../../components/MessagesCard/MessagesCard"
import GoalsDashboardCard from "../../components/GoalsDashboardCard/GoalsDashboardCard"
import EventsCard from "../../components/EventsCard/EventsCard"
import QuotesCard from "../../components/QuotesCard/QuotesCard"
import StatsCard from "../../components/StatsCard/StatsCard"
import InvitationsCard from "../../components/InvitationsCard/InvitationsCard"

//animation
import animationData from '../../assets/loading-animation.json'


const Dashboard = (props) => {
  const [userProfile, setUserProfile] = useState({})
  const [preferences, setPreferences] = useState({})
  const [usersGoals, setUsersGoals] = useState({})
  const [usersEvents, setUsersEvents] = useState({})
  const [usersToDoLists, setUsersToDoLists] = useState({})
  const [usersHabits, setUsersHabits ] = useState({})
  const [usersStats, setUsersStats] = useState({})
  const [usersMessages, setUsersMessages] = useState({})
  const [usersInvitations, setUsersInvitations] = useState({})
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
      const invitationData = await invitationService.getUsersInvitations(props.user.profile)
      // const quotesData = await quoteService.getQuotes()

      const filteredEvents = eventsData.filter(event => new Date(event.start) > new Date())

      filteredEvents.sort((a, b) => new Date(a.start) - new Date(b.start))

      setUserProfile(data)
      setUsersGoals(goalsData)
      setUsersEvents(filteredEvents)
      setUsersToDoLists(tasksData)
      setUsersHabits(habitsData)
      setUsersStats(statsData)
      setUsersMessages(messagesData)
      // setQuotes(quotesData)
      const preferencesData = data.preferences[0]
      setPreferences(preferencesData)
      setUsersInvitations(invitationData)
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

  const handleAcceptInvitation = async (invitationId) => {
    await invitationService.acceptInvitation(props.user.profile, invitationId)
    const filteredData = usersInvitations.filter(invitation => invitation._id !== invitationId)
    setUsersInvitations (filteredData)
  }

  const handleDeclineInvitation = async (invitationId) => {
    await invitationService.declineInvitation(props.user.profile, invitationId)
  }

  if (loading) {
    return (
      <div className="px-4 py-8 laptop:w-4/5 iphone:w-full flex flex-col justify-center items-center bg-green-100 ">
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    )
  }

  return (
    <div className="laptop:w-4/5 iphone:w-full bg-green-100 flex justify-start overflow-y-auto font-poppins p-8 h-full">
        <div className="grid laptop:grid-cols-3 gap-4 w-full">
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
          {/* {preferences.showQuotes && 
          < QuotesCard 
            userProfile={userProfile}
            quotes={quotes}
          />} */}
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
          < InvitationsCard
            usersInvitations={usersInvitations}
            handleAcceptInvitation={ handleAcceptInvitation }
            handleDeclineInvitation={ handleDeclineInvitation }
          />
        </div>
    </div>
  )
}

export default Dashboard
