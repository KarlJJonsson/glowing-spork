import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Test from './Test'

export const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
    </Routes>
  )
}

export default Main
