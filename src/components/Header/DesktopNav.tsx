import { Button } from '../ui/button'
import MobileNav from './MobileNav'

const DesktopNav = () => {
  return (
    <div className='my-container bg-beige-100'>
      <div className='flex justify-between items-center'>
        <span className='font-bold text-xl'>spense.</span>
        <nav className='md:flex space-x-4 hidden'>
          <span className='nav-link'>Business</span>
          <span className='nav-link'>Pricing</span>
          <span className='nav-link'>Features</span>
          <span className='nav-link hidden lg:inline-block'>Login</span>
          <div className='lg:ml-auto flex-1'></div>
        </nav>
        <div className='hidden md:flex space-x-4 items-center'>
          <span className='nav-link lg:hidden'>Login</span>
          <Button
            variant={'link'}
            className='bg-black text-white px-6 py-[18px] hover:no-underline hover:cursor-pointer hover:scale-105 transition-all duration-300 hidden md:flex items-center justify-center'
          >
            Get Started
          </Button>
        </div>
        <div className='md:hidden'>
          <MobileNav />
        </div>
      </div>
    </div>
  )
}

export default DesktopNav
