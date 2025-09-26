
import TopBar from '../Layout/TopBar'
import DemoNavBar from './DemoNavBar'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header className='border-b border-gray-200'>

        {/* Top Bar */}
        <TopBar/>

        {/* NavBar */}
        {/* <NavBar/> */}

        <DemoNavBar/>


        {/* Cart Drawer */}

    </header>
  )
}

export default Header