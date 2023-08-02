import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Root from '@/app/components/containers/Root'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/containers/Footer'

const HomePage: FC = () => {
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

export default HomePage