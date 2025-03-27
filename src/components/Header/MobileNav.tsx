import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Button } from '../ui/button'

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Menu size={32} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <VisuallyHidden>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Navigation links</SheetDescription>
            </VisuallyHidden>
          </SheetHeader>
          <div className='flex flex-col items-center'>
            <nav className='flex flex-col space-y-10 items-center font-bold'>
              <span className='nav-link text-5xl'>Home</span>
              <span className='nav-link text-5xl'>Business</span>
              <span className='nav-link text-5xl'>Pricing</span>
              <span className='nav-link text-5xl'>Features</span>
              <span className='nav-link text-5xl'>Login</span>
            </nav>

            <Button className=' mt-40 bg-black text-white text-xl px-12 py-6 hover:no-underline hover:cursor-pointer hover:scale-[102%] transition-all duration-300'>
              Get Started
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
