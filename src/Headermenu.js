import React from "react";
import logo from "./logo.png"
import "./Headermenu.css"

export const Headermenu = () => {

  return(
    <div className="banner">
      <img src={logo} alt="Logo" width={50} height={50} className="logo"/>
    </div>
  );
}
export default Headermenu;