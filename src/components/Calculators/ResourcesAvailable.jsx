import React from "react"
import AroundFrameTitle from "../UI/Frame/AroundFrameTitle"
import CustomInput from "../UI/Input/CustomInput"

const ResourcesAvailable = () => {
  return (
    <AroundFrameTitle title="Ресурсы в наличии">
      <div className="box">
        <CustomInput type="number" icon={"/assets/icons/food.webp"} />
        <CustomInput type="number" icon={"/assets/icons/wood.webp"} />
        <CustomInput type="number" icon={"/assets/icons/stone.webp"} />
        <CustomInput type="number" icon={"/assets/icons/gold.webp"} />
      </div>
    </AroundFrameTitle>
  )
}

export default ResourcesAvailable
