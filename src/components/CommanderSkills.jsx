import React from "react"
import CS from "./CommanderSkills.module.scss"
import AroundFrameTitle from "./UI/Frame/AroundFrameTitle"

const CommanderSkills = ({ skills }) => {
  return (
    <div className={CS.skills}>
      {skills.map((skill) => (
        <div className={CS.content}>
          <AroundFrameTitle title={skill.name}>
            <div className={CS.box}>
              <div className={CS.left}>
                <img src={skill.icon} alt="icon" />
              </div>
              <div className={CS.right}>
                <p className={CS.type}>
                  <strong>{skill.type}</strong>
                </p>
                {skill.skill_info.map((e) => (
                  <p key={e}>{e}</p>
                ))}
              </div>
            </div>
          </AroundFrameTitle>
        </div>
      ))}
    </div>
  )
}

export default CommanderSkills
