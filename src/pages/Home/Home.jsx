// npm services 
import { Link } from "react-router-dom"
import { useEffect } from "react"
import SplitType from "split-type"
import { gsap } from "gsap"
import { TypeAnimation } from "react-type-animation"
import Lottie from "react-lottie"

// animation json
import animationData from '../../assets/tree-animation.json'

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
    <div className="py-8 laptop:w-4/5 iphone:w-full flex flex-col items-center bg-meadow-3rd relative bg-fixed bg-cover bg-center overflow-y-auto">
      <div className="relative z-10 flex flex-col items-center mb-6">
        <h1
          id="text"
          className="text-7xl font-black font-pacifico text-center text-black mb-4 font-outline-2"
        >
          Motiva Meadow
        </h1>
      </div>
      <div className="mb-6 bg-[#ffffc8]/70 w-full flex justify-center items-center laptop:h-1/5 iphone:h-2/6 text-center ">
        <Lottie
          options={defaultOptions}
          height={200}
          width={200}
        />
        <TypeAnimation
          className=" text-black "
          sequence={[
            "Where Growth Blossoms: Cultivate Your Potential",
            1000,
          ]}
          style={{fontSize: '2em', fontFamily: 'Poppins'}}
        />
        <Lottie
          options={defaultOptions}
          height={200}
          width={200}
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="mb-8 border w-4/5 border-green-600 rounded-lg shadow-lg p-4 sticky-note fade-in-element">
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