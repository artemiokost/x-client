import { combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { postReducer } from '@/app/reducers/postReducer'
import { postPageReducer } from '@/app/reducers/postPageReducer'
import { searchReducer } from '@/app/reducers/searchReducer'

const combinedReducer = combineReducers({
  post: postReducer,
  postPage: postPageReducer,
  search: searchReducer,
})

const rootReducer: typeof combinedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload }
  } else {
    return combinedReducer(state, action)
  }
}

export default rootReducer
