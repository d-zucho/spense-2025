import './index.css'
import Header from '@/components/Header'
import Hero from './components/Hero'
import DesktopNav from './components/Header/DesktopNav'
import SocialRow from './components/SocialRow'
import SecureMoney from './components/SecureMoney'
import EditorPreview from './components/EditorPreview'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main className='border-2'>
        <DesktopNav />
        <Hero />
        <SocialRow />
        <SecureMoney />
        <EditorPreview />
      </main>
      <Footer />
    </>
  )
}

export default App
