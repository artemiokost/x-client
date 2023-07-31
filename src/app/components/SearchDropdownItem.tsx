import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { createPreview } from '@/app/utils/Helpers'

interface SearchDropdownItemProps {
  id?: string | null
  content?: string | null
  title?: string | null
  uri?: string | null
  clearSearchInput: () => void
}

const SearchDropdownItem: FC<SearchDropdownItemProps> = ({ id, content, title, uri, clearSearchInput }) => {
  let preview = createPreview(content, 200)

  return (
    <li id={'entry-' + id}>
      <div className="is-block" onClick={clearSearchInput}>
        <NavLink className="navbar-item" to={'/post/' + uri}>
          <div className="is-block">
            <h5>{title}</h5>
            <p>{preview}</p>
          </div>
        </NavLink>
      </div>
    </li>
  )
}

export default SearchDropdownItem
