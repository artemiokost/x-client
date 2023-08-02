import '../../public/css/illumi.css'
import { FC, PropsWithChildren } from 'react'
import ReduxProvider from '@/app/components/ReduxProvider'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReduxProvider>
      <html lang='en'>
      <head>
        <script defer src='/lib/fontawesome/all.min.js' data-auto-replace-svg='nest'></script>
        <title>X</title>
      </head>
      <body className='has-navbar-fixed-top-desktop'>
      {children}
      </body>
      </html>
    </ReduxProvider>
  )
}

export default RootLayout