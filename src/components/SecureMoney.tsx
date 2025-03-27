import { ArrowRight } from 'lucide-react'
import PhoneDesktop from '@/Assets/PhoneMockupDesktop.png'
import PhoneTablet from '@/Assets/PhoneMockupTablet.png'
import PhoneMobile from '@/Assets/PhoneMockupMobile.png'

const SecureMoney = () => {
  return (
    <section className='w-full'>
      <div className='my-container'>
        <div className='bg-beige-100 rounded-xl flex flex-col lg:flex-row items-center justify-between relative'>
          <div className='p-20 flex-1 lg:max-w-[60%]'>
            <h2 className='text-4xl'>Secure your money with Escrow.</h2>
            <p className='text-muted-text mt-2'>
              Spense uses Escrow to secure all payments. We believe Escrow
              offers the highest level of security for your payments, so you
              never need to worry about scams.
            </p>
            <p className='text-muted-text hover:cursor-pointer underline font-bold flex gap-2 mt-4  '>
              Learn more about Escrow <ArrowRight size={24} />
            </p>
          </div>
          <div className='flex-1 max-lg:-mt-28 lg:absolute bottom-0 right-0'>
            <picture>
              <source media='(min-width: 1024px)' srcSet={PhoneDesktop} />
              <source media='(min-width: 768px)' srcSet={PhoneTablet} />
              <source media='(max-width: 767px)' srcSet={PhoneMobile} />
              <img src={PhoneMobile} alt='Hero' />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecureMoney
