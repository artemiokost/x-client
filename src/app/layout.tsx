import '../../public/css/illumi.css'
import { FC, PropsWithChildren } from 'react'
import { Head, Html } from 'next/document'
import ReduxProvider from '@/app/components/ReduxProvider'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Html lang='en'>
      <Head>
        <script defer src='/lib/fontawesome/all.min.js' data-auto-replace-svg='nest'></script>
      </Head>
      <body className='has-navbar-fixed-top-desktop'>
      <ReduxProvider>{children}</ReduxProvider>
      </body>
    </Html>
  )
}

export default RootLayout