import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import postSlice from '@/lib/redux/slices/postSlice'
import postPageSlice from '@/lib/redux/slices/postPageSlice'
import searchSlice from '@/lib/redux/slices/searchSlice'

const combinedReducer = combineReducers({
  post: postSlice.reducer,
  postPage: postPageSlice.reducer,
  search: searchSlice.reducer,
})

export const store = configureStore({
  reducer: combinedReducer,
  devTools: true,
})

export type AppState = ReturnType<typeof combinedReducer>
export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>
