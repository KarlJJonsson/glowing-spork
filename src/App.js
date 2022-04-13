import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Signin } from './components/Signin'
import { Button } from 'antd'
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
        <Main />
        <Button onClick={() => handleLogin(!authorized)}>Logout</Button>
      </div>
          )
    }
      </div>
  )
}
export default App
