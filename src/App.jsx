import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import 'antd/dist/antd.min.css'
import Dashboard from './views/Dashboard'
import Profile from './views/Profile'

const App = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />}/>
    </Routes>
  )
}
export default App
