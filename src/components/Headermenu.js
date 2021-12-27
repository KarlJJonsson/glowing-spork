import React from 'react'

import logo from '../assets/logo.png'

export const Headermenu = () => {
  return (
    <div className="bg-black w-full absolute">
      <img
        src={logo}
        alt="Logo"
        width={50}
        height={50}
        className="float-left"
      />
    </div>
  )
}
export default Headermenu
