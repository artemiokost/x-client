interface Page<T> {
  list: T[]
  pageNumber: number
  totalElements: number
  totalPages: number
}
