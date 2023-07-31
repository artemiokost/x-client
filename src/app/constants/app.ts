export const API_BASE_URL = process.env.NODE_ENV === 'development' ? 'https://localhost:8000/' : 'https://localhost/'

export const CATEGORY = {
  ALL: 0,
  ARTICLE: 1,
  BLOG: 2,
  NEWS: 3,
  DISCUSSION: 4,
}

export const TAG = {
  MOVIE: 1,
  OPINION: 2,
  OTHER: 3,
  REVIEW: 4,
  SCIENCE: 5,
  TECHNOLOGY: 6,
}

export const DEFAULT_BIRTH_DATE = '1991-01-01 12:00:00'
export const DEFAULT_COMMENT_LIST_SIZE = 3
export const DEFAULT_COMMENT_PAGE_SIZE = 16
export const DEFAULT_POST_PAGE_SIZE = 8
export const DEFAULT_SEARCH_PREVIEW_SIZE = 2
