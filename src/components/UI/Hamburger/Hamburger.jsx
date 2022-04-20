import React from "react"
import CS from "./Hamburger.module.scss"

const Hamburger = ({ hamburgerStatus, setHamburgerStatus }) => {
  return (
    <div
      id={CS.navHamburger}
      className={hamburgerStatus ? CS.open : ""}
      onClick={() => setHamburgerStatus(!hamburgerStatus)}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Hamburger
