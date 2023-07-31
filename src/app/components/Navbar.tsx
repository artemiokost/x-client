import React, { FC, useRef, useState } from 'react'
import { debounce } from 'lodash'
import { NavLink } from 'react-router-dom'
import { Brand } from '@/svg/Brand'
import { TAG } from '@/app/constants/app'
import SearchDropdown from '@/app/components/SearchDropdown'
import { getSearchPreview } from '@/app/api/searchApi'
import { useAppDispatch } from '@/app/hooks/hooks'

interface SearchDropDownProps {
  isOpen: boolean
  searchKey: string | null | undefined
}

const Navbar: FC = (...props) => {
  let [state, setState] = useState<SearchDropDownProps>({
    isOpen: false,
    searchKey: null,
  })

  let brandRef = useRef<SVGSVGElement>(null)
  let burgerButtonRef = useRef<HTMLAnchorElement>(null)
  let menuRef = useRef<HTMLDivElement>(null)
  let searchBoxRef = useRef<HTMLDivElement>(null)
  let searchInputRef = useRef<HTMLInputElement>(null)
  let searchButtons: HTMLAnchorElement[] | null[] = []

  let dispatch = useAppDispatch()

  let clearSearchInput = () => {
    if (searchInputRef.current != null) searchInputRef.current.value = ''
    setState({ ...state, searchKey: null })
  }

  let searchPreview = debounce(() => {
    let searchKey = searchInputRef.current?.value
    setState({ ...state, searchKey: searchKey })
    dispatch(getSearchPreview(searchKey))
  }, 1000)

  let switchNavberItemClassname = ({ isActive }: any) =>
    isActive ? 'navbar-item is-semibold is-active' : 'navbar-item is-semibold'

  let toggleMenu = () => {
    let burgerButton = burgerButtonRef.current?.getElementsByTagName('svg')[0]
    burgerButton?.classList.toggle('fa-bars')
    burgerButton?.classList.toggle('fa-times')
    menuRef.current?.classList.toggle('is-active')
    setState({ ...state, isOpen: !state.isOpen })
  }

  let toggleSearch = () => {
    if (state.isOpen) toggleMenu()
    clearSearchInput()
    toggleSearchButtons()
    brandRef.current?.classList.toggle('is-grey')
    searchBoxRef.current?.classList.toggle('is-active')
  }

  let toggleSearchButtons = () => {
    searchButtons.forEach((e) => {
      let svg = e?.getElementsByTagName('svg')[0]
      e?.classList.toggle('is-grey')
      svg?.classList.toggle('fa-search')
      svg?.classList.toggle('fa-times')
    })
  }

  let renderSearchDropdown = () => <SearchDropdown searchKey={state.searchKey} clearSearchInput={clearSearchInput} />

  return (
    <div className="navbar has-shadow is-fixed-top-desktop">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-burger" ref={burgerButtonRef} onClick={toggleMenu}>
            <i className="far fa-bars fa-lg" />
          </a>
          <NavLink className="navbar-item" to="/">
            <Brand width={40} height={40} ref={brandRef} />
          </NavLink>
          <a className="search-button" ref={(e) => (searchButtons[0] = e)} onClick={toggleSearch}>
            <i className="far fa-search fa-lg" />
          </a>
        </div>
        <div className="navbar-menu" ref={menuRef}>
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink className={switchNavberItemClassname} to="/news">
                Новости
              </NavLink>
              <div className="navbar-dropdown">
                <NavLink className="navbar-item" to={'/news/tag/' + TAG.MOVIE}>
                  Кино
                </NavLink>
                <NavLink className="navbar-item" to={'/news/tag/' + TAG.SCIENCE}>
                  Наука
                </NavLink>
                <NavLink className="navbar-item" to={'/news/tag/' + TAG.TECHNOLOGY}>
                  Технологии
                </NavLink>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink
                className={(props) =>
                  props.isActive ? 'navbar-item is-semibold is-active' : 'navbar-item is-semibold'
                }
                to="/article"
              >
                Статьи
              </NavLink>
              <div className="navbar-dropdown">
                <NavLink className="navbar-item" to={'/article/tag/' + TAG.OPINION}>
                  Мнения
                </NavLink>
                <NavLink className="navbar-item" to={'/article/tag/' + TAG.REVIEW}>
                  Обзоры
                </NavLink>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a className="search-button" title="Поиск" ref={(e) => (searchButtons[1] = e)} onClick={toggleSearch}>
              <i className="far fa-search fa-lg" />
            </a>
          </div>
        </div>
      </div>
      <div className="navbar-search" ref={searchBoxRef}>
        <div className="container">
          <div className="search-field">
            <div className="control">
              <input
                className="input"
                type="search"
                autoComplete="off"
                placeholder="Поиск..."
                ref={searchInputRef}
                onInput={searchPreview}
              />
            </div>
          </div>
          {state.searchKey ? renderSearchDropdown() : null}
        </div>
      </div>
    </div>
  )
}

export default Navbar
