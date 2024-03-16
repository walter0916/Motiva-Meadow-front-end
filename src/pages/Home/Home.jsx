// npm services 
import { Link } from "react-router-dom"
import { useEffect } from "react"
import SplitType from "split-type"
import { gsap } from "gsap"
import { TypeAnimation } from "react-type-animation"
import Lottie from "react-lottie"

// animation json
import animationData from '../../../public/tree-animation.json'

// images
import logo from '../../../public/motiva-meadow-logo.png'

//css
import "./Home.css"


const Home = (props) => {

  useEffect(() => {
    const textAnimation = () => {
      const text = new SplitType("#text")
      gsap.from(text.chars, {
        y: 10,
        duration: 0.5,
        delay: 0.05,
        stagger: 0.05,
      })
    }
    textAnimation()
  }, [])

  const defaultOptions = {
    loop:true,
    autoplay:true,
    animationData:animationData,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className="px-4 py-8 w-4/5 flex flex-col justify-center items-center bg-gradient-to-r from-[#29bf12] via-[#abff4f] to-[#29bf12] relative">
      <div className="size-32 bg-white border rounded-full mb-6 shadow-lg">
        <img src={logo} alt="" />
      </div>
      <div className="relative z-10">
        <h1
          id="text"
          className="text-7xl font-black font-kalam text-center text-white mb-4 font-outline-2"
        >
          Welcome to Motiva Meadow
        </h1>
      </div>
      <TypeAnimation
        className="text-xl text-center font-black font-poppins text-black mb-6"
        sequence={[
          "Where Growth Blossoms: Cultivate Your Potential at Motiva Meadow",
          1000,
        ]}
      />
      <div className="w-full flex flex-row justify-around">
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
      />
      <div className="mb-8 border border-green-600 rounded-lg shadow-lg p-4 sticky-note">
        <h2 className="text-2xl font-semibold font-poppins text-black mb-2">How to Use Motiva Meadow</h2>
        <ul className="font-poppins font-semibold">
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
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
      />
      </div>

      <div>
        {!props.user ? (
          <div className="text-center">
            <Link
            to="/auth/signup"
            className="visited:text-white bg-blue-500 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-blue-600 hover:text-white mr-4"
          >
            Get Started
            </Link>
          </div>
        ) : (
          <div className="text-center" >
            <Link
              to="/dashboard"
              className="visited:text-white bg-blue-500 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-blue-600 hover:text-white mr-4"
            >
              Dashboard
            </Link>
            <Link
              to="/settings"
              className="visited:text-white bg-orange-500 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-orange-600 hover:text-white"
            >
              Settings
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home