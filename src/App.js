import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Signin } from './Signin'
import Main from './components/Main'
import Headermenu from './components/Headermenu'
import 'antd/dist/antd.min.css'

export const App = () => {
  const [authorized, setAuthorized] = useState(false)

  const handleLogin = (val) => {
    setAuthorized(val)
  }

  return (
    <div>
      {!authorized
        ? (
          <Routes>
            <Route exact path="/" element={<Navigate to ="/login" />} />
            <Route path="/login" element={<Signin auth={authorized} handleLogin={handleLogin} />} />
          </Routes>
          )
        : (
      <div>
        <Headermenu />
        <button onClick={() => handleLogin(!authorized)}>Logout</button>
        <Main />
      </div>
          )
    }
      </div>
  )
}
export default App
