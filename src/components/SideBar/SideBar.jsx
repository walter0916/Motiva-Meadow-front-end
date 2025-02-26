// npm modules
import { NavLink } from 'react-router-dom'
import { FiLogIn, FiLogOut, FiUserPlus, FiMenu } from 'react-icons/fi'
import { useState, useEffect } from 'react'

//css
import './SideBar.css'

// images
import logo from '../../assets/motiva-meadow-logo.png'

const SideBar = ({ user, profile , handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isToggleable, setIsToggleable] = useState(false)
  const iconClass = 'w-6 h-6 mr-2'

  useEffect(() => {
    const handleResize = () => {
      setIsToggleable(window.innerWidth < 1000)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }

  return (
    <>
    {isToggleable && (
        <button className="bg-gray-600 p-2 text-white absolute z-30 top-0 right-0" onClick={toggleSidebar}><FiMenu /></button>
    )}
      <nav className={`bg-green-100 z-20 text-black font-poppins overflow-y-auto ${isToggleable ? (isOpen ? 'w-full' : 'hidden') : 'w-1/4'} iphone:fixed left-0`}>
        {user ?
          <ul>
              <div id="profile" className="px-2">
                <img src={logo} alt=""/>
                <div href="#" className="inline-flex space-x-2 items-center w-full">
                  <span>
                      <img className="rounded-full w-9 h-9 " src={profile.photo} alt="" />
                  </span>
                  <span className="text-sm md:text-base font-bold text-black">
                      {user.name}
                  </span>
                </div>
              </div>
            <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/20 transition ease-linear duration-150'>
              <NavLink className='link flex flex-row' to="/" onClick={closeSidebar}>                
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>           
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-5 text-black">Home</span>
                  <span className="text-sm font-semibold text-black/80 hidden md:block">
                    About Motiva Meadow
                  </span>
                </div>
              </NavLink>
            </li>
            <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/20 transition ease-linear duration-150'>
              <NavLink className='link flex flex-row' to="/dashboard" onClick={closeSidebar} >                
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>           
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-5 text-black">Dashboard</span>
                  <span className="text-sm font-semibold text-black/80 hidden md:block">Data Overview</span>
                </div>
              </NavLink>
            </li>
            <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/20 transition ease-linear duration-150'>
              <NavLink className='link flex flex-row' to="/calender" onClick={closeSidebar}>
              <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>           
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-5 text-black">Calender</span>
                  <span className="text-sm font-semibold text-black/80 hidden md:block">Manage Events</span>
                </div>
              </NavLink>
            </li>
            <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/20 transition ease-linear duration-150'>
            <NavLink className='link flex flex-row' to="/habits" onClick={closeSidebar}>
              <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>           
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-5 text-black">Habits</span>
                  <span className="text-sm font-semibold text-black/80 hidden md:block">Manage and Track Habits</span>
                </div>
              </NavLink>
            </li>
            <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/20 transition ease-linear duration-150'>
              <NavLink className='link flex flex-row' to="/goals" onClick={closeSidebar}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>           
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-5 text-black">Goals</span>
                  <span className="text-sm font-semibold text-black/80 hidden md:block">Manage and Track Goals</span>
                </div>
              </NavLink>
            </li>
            <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/20 transition ease-linear duration-150'>
              <NavLink className='link flex flex-row' to="/tasks" onClick={closeSidebar}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>           
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-5 text-black">Tasks</span>
                  <span className="text-sm font-semibold text-black/80 hidden md:block">Manage and Track Tasks</span>
                </div>
              </NavLink>
            </li>
            <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/20 transition ease-linear duration-150'>
              <NavLink className='link flex flex-row' to="/friends" onClick={closeSidebar} >
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>           
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-5 text-black">Friends</span>
                  <span className="text-sm font-semibold text-black/80 hidden md:block">Add/Remove Friends and Send Messages</span>
                </div>
              </NavLink>
            </li>
            <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/20 transition ease-linear duration-150'>
              <NavLink className='link flex flex-row' to="/settings" onClick={closeSidebar}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                  </svg>                    
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-5 text-black" >Settings</span>
                  <span className="text-sm font-semibold text-black/80 hidden md:block">Edit Profile and Change Password</span>
                </div>
              </NavLink>
            </li>
            <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3  hover:bg-white/20 transition ease-linear duration-150'><NavLink className='link flex' to="" onClick={handleLogout}><FiLogOut className={iconClass} /> LOG OUT</NavLink >
            </li>
          </ul>
        :
          <ul>
            <img src={logo} alt="" />
            <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/20 transition ease-linear duration-150'>
              <NavLink className='link flex flex-row' to="/" onClick={closeSidebar}>                
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>           
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-5 text-black">Home</span>
                  <span className="text-sm font-semibold text-black/80 hidden md:block">
                    About Motiva Meadow
                  </span>
                </div>
              </NavLink>
            </li>

            <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3  hover:bg-white/20 transition ease-linear duration-150'>
              <NavLink className='link flex' to="/auth/login" onClick={closeSidebar}>
                <FiLogIn className={iconClass}/> 
                Log In
              </NavLink>
            </li>
            <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3  hover:bg-white/20 transition ease-linear duration-150'>
              <NavLink className='link flex' to="/auth/signup" onClick={closeSidebar}>
                <FiUserPlus className={iconClass} /> 
                Sign Up
              </NavLink>
            </li>
          </ul>
        }
      </nav>
    </>
  )
}

export default SideBar
