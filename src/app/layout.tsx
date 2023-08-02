import '../../public/css/illumi.css'
import '../../public/lib/fontawesome/css/all.min.css'
import { FC, PropsWithChildren } from 'react'
import ReduxProvider from '@/app/components/ReduxProvider'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReduxProvider>
      <html lang='en'>
      <body className='has-navbar-fixed-top-desktop'>
      {children}
      </body>
      </html>
    </ReduxProvider>
  )
}

export default RootLayout