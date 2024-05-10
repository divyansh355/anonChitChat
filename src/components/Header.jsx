import { useAuth } from '../utils/AuthContext'
import { Link } from 'react-router-dom'
import { LogOut, LogIn } from 'react-feather'

const Header = () => {
    const {user, handleLogout} = useAuth()
  return (
    <div className="w-full p-8">
        {user ? (
            <div className='flex justify-center gap-4'>
                Welcome {user.name}
                <LogOut className="header--link" onClick={handleLogout}/>
            </div>
        ): (
            <div className='flex'>
                <Link to="/">
                    <LogIn className="header--link"/>
                </Link>
            </div>
        )}
    </div>
  )
}

export default Header
