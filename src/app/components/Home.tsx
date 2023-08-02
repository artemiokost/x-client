'use client'
import { FC, Fragment, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hooks'
import Indicator from '@/app/components/containers/Indicator'
import NotFound from '@/app/components/containers/errors/NotFound'
import { Logo } from '@/svg/Logo'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import postPageSlice from '@/lib/redux/slices/postPageSlice'

const Home: FC = (...props) => {
  let postPage = useAppSelector((state) => state.postPage)
  let { isFetching, content } = postPage

  let structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    url: 'https://x.dev/',
    name: 'X',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://x.dev/search/{search_term}',
      'query-input': 'required name=search_term',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@x.dev',
      url: 'https://x.dev/',
      contactType: 'technical support',
      areaServed: 'RU',
      availableLanguage: ['English', 'Russian'],
    },
  }

  let dispatch = useAppDispatch()

  useEffect(() => {
    let fetchBody = {
      list: [
        { id: 'uid1', title: 'Под Таганрогом упал беспилотник' },
        {
          id: 'uid2',
          title: 'В Чехии заявили об аресте имущества Евтушенкова в Карловых Варах',
        },
      ],
      number: 1,
      totalElements: 2,
      totalPages: 2,
    }
    setTimeout(() => dispatch(postPageSlice.actions.fetchSuccess(fetchBody)), 3000)
  })

  const getMore = (callback?: () => void) => {
    dispatch(
      postPageSlice.actions.fetchSuccess({
        ...content,
        number: content.number + 1,
      }),
    )
  }

  let renderIndicator = () => (
    <Fragment>
      {isFetching && content.list.length === 0 ? <Indicator /> : null}
      {!isFetching && content.list.length === 0 ? <NotFound message='No more posts' /> : null}
    </Fragment>
  )

  let renderMoreButton = () =>
    isFetching || content.number <= content.totalPages ? (
      <div className='container my-1 is-centered'>
        <button className={classNames('button is-primary', { 'is-loading': isFetching })} onClick={() => getMore()}>
          <i className='far fa-plus' />
          More
        </button>
      </div>
    ) : null

  let renderPost = (post: PostContent, i: number) => (
    <div key={'post-' + i} className='content divided'>
      <div className='column'>
        <div className='content-header'>
          <div className='column'>
            <div className='bi-line'>
              <NavLink to={'/post/' + post.uri}>
                <h4>{post.title}</h4>
              </NavLink>
            </div>
          </div>
        </div>
        <div className='content-block'>
          <p>{post.text}</p>
        </div>
      </div>
    </div>
  )

  return (
    <Fragment>
      <div className='canopy-home'>
        <div className='container'>
          {isFetching ? (
            <div className='column p-4 is-centered'>
              <Logo className='heart-beat' />
            </div>
          ) : null}
        </div>
      </div>
      <div className='app-container'>
        {isFetching ? renderIndicator() : null}
        {!isFetching ? (
          <div className='columns'>
            <div className='column content-list'>
              <div className='breadcrumb bi-line'>
                <ul className='is-marginless'>
                  <li>
                    <NavLink to='/'>
                      <span>X</span>
                    </NavLink>
                  </li>
                  <li className='is-active'>
                    <NavLink to='/'>
                      <span>News</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              {content.list.map(renderPost)}
              {content.list.length > 0 ? renderMoreButton() : null}
            </div>
          </div>
        ) : null}
      </div>
    </Fragment>
  )
}

export default Home
