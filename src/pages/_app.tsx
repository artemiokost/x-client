import '../../public/css/illumi.css'
import { FC } from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { wrapper } from '@/lib/redux/store/configureStore'

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
