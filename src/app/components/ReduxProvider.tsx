'use client'
import React, { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/lib/redux/store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

type ReduxProviderProps = {
  children: ReactNode
}

const ReduxProvider: FC<ReduxProviderProps> = ({ children }) => {
  let persistor = persistStore(store)
  return <Provider store={store}>
    <PersistGate persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
}

export default ReduxProvider