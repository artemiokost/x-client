import '../../public/css/illumi.css'
import { FC } from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { wrapper } from '@/app/store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'

const WrappedApp: FC<AppProps> = ({ Component, pageProps, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest)
  let persistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default WrappedApp
