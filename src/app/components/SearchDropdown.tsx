import React, { FC, useState } from 'react'
import SearchDropdownItem from './SearchDropdownItem'
import { NavLink } from 'react-router-dom'
import { DEFAULT_SEARCH_PREVIEW_SIZE } from '@/app/constants/app'
import Indicator from '@/app/components/containers/Indicator'
import NotFound from '@/app/components/containers/errors/NotFound'
import { useAppSelector } from '@/app/hooks/hooks'

interface SearchDropDownProps {
  searchKey: string | null | undefined
  clearSearchInput: () => void
}

const SearchDropdown: FC<SearchDropDownProps> = ({ searchKey, clearSearchInput }) => {
  let [state, setState] = useState({
    isOpen: false,
  })

  let { isFetching, content } = useAppSelector((state) => state.search)

  let renderItems = content.list
    .slice(0, DEFAULT_SEARCH_PREVIEW_SIZE)
    .map((post, i) => <SearchDropdownItem clearSearchInput={clearSearchInput} key={i} {...post} />)

  return (
    <div className="navbar-search-dropdown">
      {isFetching ? <Indicator /> : null}
      {!isFetching && content.list.length === 0 ? <NotFound message="По вашему запросу ничего не найдено" /> : null}
      {content.list.length > 0 ? (
        <div className="container">
          <ul className="content">{renderItems}</ul>
          <div className="is-block" onClick={clearSearchInput}>
            {content.list.length > DEFAULT_SEARCH_PREVIEW_SIZE ? (
              <NavLink to={'/search/' + searchKey} className="navbar-item is-pulled-right">
                Посмотреть все
              </NavLink>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default SearchDropdown
