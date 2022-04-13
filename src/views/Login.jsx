import React from 'react'

import Signin from '../components/Signin'

export const Login = (props) => {
  return (
      <>
        <div>Login</div>
        <Signin handleLogin={props.handleLogin}/>
      </>
  )
}
export default Login
