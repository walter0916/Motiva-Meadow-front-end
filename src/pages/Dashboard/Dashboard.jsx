// css
import styles from './Dashboard.module.css'

const Dashboard = ({ user }) => {
  return (
    <main className='bg-white-500 h-screen flex flex-col content-center justify-center items-center '>
      <h1 className='text-6xl text-blue-800'>hello, {user ? user.name : 'friend'}</h1>
    </main>
  )
}

export default Dashboard
