// npm services 
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import SplitType from "split-type"
import { gsap } from "gsap"

const Home = () => {

  useEffect(() => {
    const textAnimation = () => {
      const text = new SplitType("#text")
      const words = document.querySelectorAll('#text .word')
      gsap.from(text.chars, {
        y: 10,
        duration: 0.5,
        delay: 0.02,
        stagger: 0.05,
      })
    }
    textAnimation()
  }, [])

  return (
    <div className="px-4 py-8 w-4/5 flex flex-col justify-center bg-gradient-to-r from-lime-400 to-lime-600">
      <h1 id='text' className="text-6xl font-bold text-center text-black mb-4" >
        Welcome to Motiva Meadow
      </h1>
      <p className="text-lg text-center font-semibold text-black mb-6">
        Where Growth Blossoms: Cultivate Your Potential at Motiva Meadow
      </p>

      <div className="mb-8 border border-green-600 rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-semibold text-black mb-2">How to Use Motiva Meadow</h2>
          <ul className="list-disc pl-6 text-black animate-fadeIn font-semibold">
            <li>Change your preferences in settings to update what you want to see on your dashboard</li>
            <li>Add events to see them on the calendar</li>
            <li>Add habits, goals, and to-do lists to track your progress</li>
            <li>Archive to-do lists for better organization</li>
            <li>Set deadlines for goals to see how many days are left</li>
            <li>View automatically updated stats like habit streaks and to-do list streaks</li>
            <li>Add friends to check their stats and send them motivational messages</li>
            <li>Get inspired with motivational quotes on the dashboard</li>
          </ul>
      </div>

      <div className="text-center">
        <Link
          to="/dashboard"
          className="visited:text-white bg-blue-500 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-blue-600 hover:text-white mr-4"
        >
          Get Started
        </Link>
        <Link
          to="/settings"
          className="visited:text-white bg-orange-500 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-orange-600 hover:text-white"
        >
          Settings
        </Link>
      </div>
    </div>
  )
}

export default Home