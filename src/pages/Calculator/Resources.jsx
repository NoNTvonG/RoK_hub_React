import React from "react"
import { useSelector } from "react-redux"
import ResourcesAvailable from "../../components/Calculators/ResourcesAvailable"
import ResourcesSets from "../../components/Calculators/ResourcesSets"
import AroundFrameTitle from "../../components/UI/Frame/AroundFrameTitle"
import CustomInput from "../../components/UI/Input/CustomInput"
import PageTopTitle from "../../components/UI/Titles/PageTopTitle"

const Resources = () => {
  const resources = useSelector((state) => state.calculators.resources)

  return (
    <div className="resources">
      <PageTopTitle>Калькулятор ресурсов</PageTopTitle>
      <div className="resources-box-01">
        <ResourcesAvailable />
      </div>
      <div className="resources-box-02">
        <ResourcesSets title={"Наборы пищи"} data={resources.sets.food} />
        <ResourcesSets title={"Наборы дерева"} data={resources.sets.wood} />
        <ResourcesSets title={"Наборы камня"} data={resources.sets.stone} />
        <ResourcesSets title={"Наборы золота"} data={resources.sets.gold} />
      </div>
      <div className="resources-box-03">
        <AroundFrameTitle title="Сундук ресурсов 'Что-то одно'">
          <div className="wrapper">
            <div className="box">
              <CustomInput text="ур.1" />
              <CustomInput text="Пища" />
              <CustomInput text="Дерево" />
              <CustomInput text="Камень" />
              <CustomInput text="Золото" />
            </div>
            <div className="box">
              <CustomInput text="ур.2" />
              <CustomInput text="Пища" />
              <CustomInput text="Дерево" />
              <CustomInput text="Камень" />
              <CustomInput text="Золото" />
            </div>
            <div className="box">
              <CustomInput text="ур.3" />
              <CustomInput text="Пища" />
              <CustomInput text="Дерево" />
              <CustomInput text="Камень" />
              <CustomInput text="Золото" />
            </div>
            <div className="box">
              <CustomInput text="ур.4" />
              <CustomInput text="Пища" />
              <CustomInput text="Дерево" />
              <CustomInput text="Камень" />
              <CustomInput text="Золото" />
            </div>
          </div>
        </AroundFrameTitle>
      </div>
      <div className="resources-box-04">
        <AroundFrameTitle title="Наборы ресурсов">
          <div className="box">
            <CustomInput type="number" text="A ур. 1" />
            <CustomInput type="number" text="B ур. 1" />
            <CustomInput type="number" text="C ур. 1" />
            <CustomInput type="number" text="ур. 2" />
            <CustomInput type="number" text="ур. 3" />
          </div>
        </AroundFrameTitle>
      </div>
      <div className="resources-box-05">
        <AroundFrameTitle title="Итого">
          <div className="box">
            <CustomInput
              type="number"
              icon={"/assets/icons/food.webp"}
              status="true"
            />
            <CustomInput
              type="number"
              icon={"/assets/icons/wood.webp"}
              status="true"
            />
            <CustomInput
              type="number"
              icon={"/assets/icons/stone.webp"}
              status="true"
            />
            <CustomInput
              type="number"
              icon={"/assets/icons/gold.webp"}
              status="true"
            />
          </div>
        </AroundFrameTitle>
      </div>
    </div>
  )
}

export default Resources
