import MobileHero from '@/Assets/Hero-Image-Mobile.png'
import TabletHero from '@/Assets/Hero-Image-Tablet.png'
import DesktopHero from '@/Assets/Hero-Image-Desktop.png'
import Checkmark from '@/Assets/Checkmark.svg'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const HERO_FACTS: { id: number; text: string }[] = [
  {
    id: 1,
    text: 'Receive 99% off the earnings.',
  },
  {
    id: 2,
    text: 'Get paid for your thoughts.',
  },
  {
    id: 3,
    text: 'Withdraw your earnings anytime.',
  },
]

const Hero = () => {
  return (
    <div className='bg-beige-100 w-full'>
      <section className='flex flex-col gap-5 lg:flex-row items-center justify-between my-container'>
        <div className='flex-1 lg:order-1'>
          <picture>
            <source media='(min-width: 1024px)' srcSet={DesktopHero} />
            <source media='(min-width: 768px)' srcSet={TabletHero} />
            <source media='(max-width: 767px)' srcSet={MobileHero} />
            <img src={MobileHero} alt='Hero' />
          </picture>
        </div>

        <div className='flex-1 mt-10 lg:mt-0 mr-auto'>
          <h1 className='text-4xl lg:text-[56px] font-bold'>
            Share your unfiltered thoughts. Get Paid.
          </h1>
          <div>
            <p className='text-lg mt-2 max-w-2xl text-muted-text'>
              Spense is an open platform for individuals to share their
              unfiltered thoughts. Discuss the topics you love, and get paid for
              doing just that.
            </p>

            <div className=' space-y-5 mt-5'>
              {HERO_FACTS.map((fact) => (
                <div key={fact.id} className='flex items-center'>
                  <img src={Checkmark} alt='feature' aria-hidden />
                  <span className='ml-4'>{fact.text}</span>
                </div>
              ))}
            </div>
            <div className='mt-8 flex gap-4'>
              <Input
                type='email'
                placeholder='john@example.com'
                className='border-black w-1/2 md:min-w-[260px] max-sm:w-[200px]'
              />
              <Button className='bg-black text-white hover:cursor-pointer hover:scale-[102%] transition-all duration-300 px-6 py-[18px]'>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
