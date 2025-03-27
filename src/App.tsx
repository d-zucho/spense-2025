import './index.css'
import Header from '@/components/Header'
import Hero from './components/Hero'
import DesktopNav from './components/Header/DesktopNav'
import SocialRow from './components/SocialRow'
import SecureMoney from './components/SecureMoney'

function App() {
  return (
    <>
      <Header />
      <main className='border-2'>
        <DesktopNav />
        <Hero />
        <SocialRow />
        <SecureMoney />
      </main>
    </>
  )
}

export default App
