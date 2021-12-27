import React, { useState } from 'react'
import { Signin } from './components/Signin'
import Main from './components/Main'
import Headermenu from './components/Headermenu'

export const App = () => {
  const [authorized, setAuthorized] = useState(false)

  const handleLogin = (val) => {
    setAuthorized(val)
  }

  if (!authorized) {
    return (
      <div className="flex justify-center">
        <Signin auth={authorized} handleLogin={handleLogin} />
        <a
          className="text-blue-400 hover:text-sky-700 text-bold"
          href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind test
        </a>
      </div>
    )
  } else {
    return (
      <div>
        <Headermenu />
        <button onClick={() => handleLogin(!authorized)}>Logout</button>
        <Main />
      </div>
    )
  }
}
export default App
