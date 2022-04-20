import React from "react"
import PageTopTitle from "../components/UI/Titles/PageTopTitle"
import CalculatorCard from "../components/UI/Card/CalculatorCard"
import { routerLinksCalculators } from "../router/index.js"
import { NavLink } from "react-router-dom"
const Calculators = () => {
  return (
    <div className="calculators">
      <PageTopTitle>Калькулятор</PageTopTitle>
      <div>
        <div className="calculatorsList">
          {routerLinksCalculators.map((item) => (
            <NavLink to={item.to}>
              <CalculatorCard title={item.title} />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calculators
