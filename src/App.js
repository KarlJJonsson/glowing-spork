import { useState } from 'react'
import { Signin } from './Signin'
import Main from './Main'
import Headermenu from './Headermenu'
import 'antd/dist/antd.min.css'

export const App = () => {
  const [authorized, setAuthorized] = useState(false)

  const handleLogin = (val) => {
    setAuthorized(val)
  }

  if (!authorized){
    return(
      <div>
        <div className="flex justify-center">
          <Signin auth={authorized} handleLogin={handleLogin}/>
        </div>
        <div className="flex justify-center">
          <a 
            class="text-blue-400 hover:text-sky-700 text-bold" 
            href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
            target="_blank"
            rel="noopener noreferrer"
            >
            Tailwind test
          </a>
        </div>
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
