import { BrowserRouter } from 'react-router-dom'
import Root from '@/app/components/containers/Root'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/containers/Footer'

export default function HomePage() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Navbar />
        <Root />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
