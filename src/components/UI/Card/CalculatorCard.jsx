import React from "react"
import CS from "./CalculatorCard.module.scss"

const CalculatorCard = ({ title }) => {
  return (
    <div
      className={CS.card}
      style={{
        borderImage: `url(${
          process.env.PUBLIC_URL + "/assets/frames/frame.webp"
        }) 15% round`,
      }}
    >
      <span className={CS.title}>{title}</span>
    </div>
  )
}

export default CalculatorCard
