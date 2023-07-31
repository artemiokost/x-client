interface Page<T> {
  list: T[]
  page: number
  totalElements: number
  totalPages: number
}
