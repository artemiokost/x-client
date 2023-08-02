import React from 'react'
import NotFound from './errors/NotFound'
import { Route, Routes } from 'react-router-dom'
import Home from '@/app/components/Home'

const Root = () => (
  <div className='root-container'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />

      <Route element={<NotFound />} />
    </Routes>
  </div>
)

export default Root
