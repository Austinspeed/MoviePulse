import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/movie-pulse.png'
import { RiSunLine, RiMoonLine } from '@remixicon/react'
import { Link } from 'react-router-dom'
import {ThemeContext} from '../../Context/ThemeContext'
import {useContext} from 'react'

const Header = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      navigate(0);
    } else {
      navigate('/');
    }
    window.scrollTo(0, 0);
  };
  return (
    <header className=' sticky  top-0 z-50 backdrop-blur-lg bg-white/75 dark:bg-gray-900/75 shadow-sm flex justify-between items-center p-4'>
        <Link to="/" onClick={handleLogoClick} className ="flex items-center text-2xl font-bold space-x-2">
            <img src={logo} alt="icon" className='w-8 h-10 ' /> <span> MoviePulse</span>
        </Link>
        <button onClick={toggleTheme} className='flex item-center space-x-4'>
          {theme === "dark" ?<RiSunLine  />:<RiMoonLine  />}
      
        </button>
    </header>
  )
}

export default Header