import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script defer src='/lib/fontawesome/all.min.js' data-auto-replace-svg='nest'></script>
      </Head>
      <body className='has-navbar-fixed-top-desktop'>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}
