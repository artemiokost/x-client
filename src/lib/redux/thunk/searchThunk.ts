import { request } from '@/lib/utils/ApiUtils'
import { API_BASE_URL, DEFAULT_SEARCH_PREVIEW_SIZE } from '@/lib/constants/app'
import { AppThunkAction } from '@/lib/redux/store/configureStore'
import searchSlice from '@/lib/redux/slices/searchSlice'

export const getSearchPreview = (searchKey?: string): AppThunkAction => (dispatch, getState) => {
  // Indicator
  dispatch(searchSlice.actions.reset())

  request({
    url: `${API_BASE_URL}post/page/${0}/${DEFAULT_SEARCH_PREVIEW_SIZE}/match/${searchKey}`,
    method: 'GET',
  })
    .then((response) => {
      dispatch(searchSlice.actions.fetchSuccess(response))
    })
    .catch((error: TypeError) => {
      dispatch(searchSlice.actions.fetchError(error.message))
    })
}
