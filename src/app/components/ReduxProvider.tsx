'use client'
import React, { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/lib/redux/store/configureStore'

type ReduxProviderProps = {
  children: ReactNode
}

const ReduxProvider: FC<ReduxProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReduxProvider