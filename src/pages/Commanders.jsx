import React from "react"
import CommandersList from "../components/CommandersList"
import PageTopTitle from "../components/UI/Titles/PageTopTitle"

const Commanders = () => {
  return (
    <div className="commanders">
      <PageTopTitle>Командиры</PageTopTitle>
      <CommandersList />
    </div>
  )
}

export default Commanders
