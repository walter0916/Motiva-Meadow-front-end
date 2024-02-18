// npm modules
import { NavLink } from 'react-router-dom'

//css
import './SideBar.css'

const SideBar = ({ user, profile , handleLogout }) => {

  return (
    <div className='w-72'>
    <nav className='bg-gradient-to-l from-lime-400 to-lime-600 min-h-screen z-10 text-black w-64 fixed left-0 h-screen overflow-y-scroll '>
      {user ?
        <ul>
          <li>
            <div id="profile" className="px-6 py-10">
              <p className="text-blue-900">Welcome back,</p>
              <div href="#" className="inline-flex space-x-2 items-center">
                <span>
                    <img className="rounded-full w-9 h-9" src={profile.photo} alt="" />
                </span>
                <span className="text-sm md:text-base font-bold text-black">
                    {user.name}
                </span>
              </div>
            </div>
          </li>
          <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/20 transition ease-linear duration-150'>
            <NavLink className='link flex flex-row' to="/">                
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>           
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-black">Dashboard</span>
                <span className="text-sm text-white/50 hidden md:block">Data Overview</span>
              </div>
            </NavLink>
          </li>
          <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/20 transition ease-linear duration-150'>
            <NavLink className='link flex flex-row' to="/calender">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>           
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-black">Calender</span>
                <span className="text-sm text-white/50 hidden md:block">Manage Events</span>
              </div>
            </NavLink>
          </li>
          <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/20 transition ease-linear duration-150'>
          <NavLink className='link flex flex-row' to="/habits">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>           
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-black">Habits</span>
                <span className="text-sm text-white/50 hidden md:block">Manage and Track Habits</span>
              </div>
            </NavLink>
          </li>
          <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/20 transition ease-linear duration-150'>
            <NavLink className='link flex flex-row' to="/goals">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>           
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-black">Goals</span>
                <span className="text-sm text-white/50 hidden md:block">Manage and Track Goals</span>
              </div>
            </NavLink>
          </li>
          <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/20 transition ease-linear duration-150'>
            <NavLink className='link flex flex-row' to="/tasks">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>           
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-black">Tasks</span>
                <span className="text-sm text-white/50 hidden md:block">Manage and Track Tasks</span>
              </div>
            </NavLink>
          </li>
          <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/20 transition ease-linear duration-150'>
            <NavLink className='link flex flex-row' to="/friends">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>           
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-black">Friends</span>
                <span className="text-sm text-white/50 hidden md:block">Add/Remove Friends and Send Messages</span>
              </div>
            </NavLink>
          </li>
          <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/20 transition ease-linear duration-150'>
            <NavLink className='link flex flex-row' to="/settings">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                </svg>                    
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-black" >Settings</span>
                <span className="text-sm text-white/50 hidden md:block">Edit Profile and Change Password</span>
              </div>
            </NavLink>
          </li>
          <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3  hover:bg-white/20 transition ease-linear duration-150'><NavLink className='link' to="" onClick={handleLogout}>LOG OUT</NavLink ></li>
        </ul>
      :
        <ul>
          <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3  hover:bg-white/20 transition ease-linear duration-150'><NavLink to="/auth/login">Log In</NavLink></li>
          <li className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3  hover:bg-white/20 transition ease-linear duration-150'><NavLink to="/auth/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
    </div>
  )
}

export default SideBar
