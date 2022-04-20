import React from "react"
import { useParams } from "react-router"
import { useSelector } from "react-redux"
import CommanderTag from "../components/UI/Tags/CommanderTag"
import CommanderSkills from "../components/CommanderSkills"

const CommanderIdPage = () => {
  const params = useParams()

  const commander = useSelector((state) =>
    state.commanders.commanders.find((state) => {
      return state.id === params.id
    })
  )

  return (
    <div className="commander">
      <div className="commanderPortfolio">
        <div className="commanderImage">
          <img src={commander.detailedInfo.image} alt="img" />
        </div>
        <div className="commanderTitle">
          <h1>{commander.name}</h1>
          <div className="commanderNacion">
            <div className="logoNacion">
              <img src={commander.detailedInfo.nacionLogo} alt="icon" />
              <span>{commander.detailedInfo.nation}</span>
            </div>
            <span className="slogan">{commander.detailedInfo.slogan}</span>
          </div>
          <div className="commanderSpecialozation">
            <CommanderTag specialization={commander.specialization} />
          </div>
        </div>
      </div>

      <div className="commanderHistory">
        <h2 className="dividerLine">
          <span>История</span>
        </h2>
        <p>{commander.detailedInfo.history}</p>
      </div>

      <div className="commanderSkills">
        <h2 className="dividerLine">
          <span>Навыки</span>
        </h2>
        <CommanderSkills skills={commander.detailedInfo.skills} />
      </div>
    </div>
  )
}

export default CommanderIdPage
