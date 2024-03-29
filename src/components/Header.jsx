import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'

const Header = (props) => {
  const { theme, setTheme } = props

  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  return (
    <header>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>

      <div>
        <span>Short URL</span>
      </div>
      <div className="theme-container">
        <span className="icon" onClick={toggleTheme}>
          {theme === 'light' ? <BsSunFill /> : <BsMoonStarsFill />}
        </span>
      </div>
    </header>
  )
}
export default Header
