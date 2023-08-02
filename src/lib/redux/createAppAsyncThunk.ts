import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch, AppState } from '@/lib/redux/store/configureStore'

/**
 * ? A utility function to create a typed Async Thunk Actions.
 */
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppState
  dispatch: AppDispatch
  rejectValue: string
}>()