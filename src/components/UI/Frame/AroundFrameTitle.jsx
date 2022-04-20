import React from "react"
import CS from "./AroundFrameTitle.module.scss"

const AroundFrameTitle = ({ title, children }) => {
  return (
    <div className={CS.frameTitle}>
      <div className={CS.title}>
        <h2>{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default AroundFrameTitle
