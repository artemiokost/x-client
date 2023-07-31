import { request } from '@/app/utils/ApiUtils'
import { API_BASE_URL, DEFAULT_SEARCH_PREVIEW_SIZE } from '@/app/constants/app'
import { AppDispatch } from '@/app/store/configureStore'
import { searchActions } from '@/app/reducers/searchReducer'

export const getSearchPreview = (searchKey?: string) => (dispatch: AppDispatch) => {
  // Indicator
  dispatch(searchActions.reset())

  request({
    url: `${API_BASE_URL}post/page/${0}/${DEFAULT_SEARCH_PREVIEW_SIZE}/match/${searchKey}`,
    method: 'GET',
  })
    .then((response) => {
      dispatch(searchActions.fetchSuccess(response))
    })
    .catch((error: TypeError) => {
      dispatch(searchActions.fetchError(error.message))
    })
}
