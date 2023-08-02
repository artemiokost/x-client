import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import postSlice from '@/lib/redux/slices/postSlice'
import postPageSlice from '@/lib/redux/slices/postPageSlice'
import searchSlice from '@/lib/redux/slices/searchSlice'
import storage from 'redux-persist/lib/storage'

const combinedReducer = combineReducers({
  post: postSlice.reducer,
  postPage: postPageSlice.reducer,
  search: searchSlice.reducer,
})

const rootReducer: typeof combinedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload }
  } else {
    return combinedReducer(state, action)
  }
}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const createStore = () =>
  configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

export type AppState = ReturnType<typeof combinedReducer>
export type AppStore = ReturnType<typeof createStore>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>

export const wrapper = createWrapper<AppStore>(createStore, { debug: true })

