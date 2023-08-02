import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const initialState: PostState = {
  isFetching: true,
  error: null,
  content: {},
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    reset: () => initialState,
    fetchError(state, action: PayloadAction<string | null>) {
      state.isFetching = false
      state.error = action.payload
      state.content = {}
    },
    fetchSuccess(state, action: PayloadAction<PostContent>) {
      state.isFetching = false
      state.error = null
      state.content = action.payload
    },
  },
})

export default postSlice
