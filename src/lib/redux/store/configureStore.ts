import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import postSlice from '@/lib/redux/slices/postSlice'
import postPageSlice from '@/lib/redux/slices/postPageSlice'
import searchSlice from '@/lib/redux/slices/searchSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  post: postSlice.reducer,
  postPage: postPageSlice.reducer,
  search: searchSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type AppState = ReturnType<typeof reducer>
export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>
