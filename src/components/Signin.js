import React from 'react'

export const Signin = ({ handleLogin, auth }) => {
  return (
    <button
      className="bg-blue-200 hover:bg-blue-300 w-1/6 ml-10 mt-10 rounded-lg shadow h-20"
      onClick={() => handleLogin(auth)}
    >
      <h1 className="text-xl">
        {console.log('2')}
        Login
      </h1>
    </button>
  )
}

export default Signin
