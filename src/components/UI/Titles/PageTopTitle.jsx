import React from "react"
import CS from "./PageTopTitle.module.scss"

const PageTopTitle = ({ children }) => {
  return (
    <div className={CS.title}>
      <h1>{children}</h1>
    </div>
  )
}

export default PageTopTitle
