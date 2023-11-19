import React from "react"
import CS from "./CommanderTag.module.scss"

const CommanderTag = ({ specialization }) => {
  const iconUrl = (param) => {
    return `${process.env.PUBLIC_URL}/assets/iconsType/Commander_icon_type_${param}.webp`
  }
  return (
    <div className={CS.specialization}>
      {specialization.map((e) => (
        <div className={CS.commanderTypes} key={e}>
          {e === "archer" && (
            <div className={CS.type}>
              <img src={iconUrl(e)} alt="icon" />
              <span>Стрелок</span>
            </div>
          )}
          {e === "cavalry" && (
            <div className={CS.type}>
              <img src={iconUrl(e)} alt="icon" />
              <span>Кавалерия</span>
            </div>
          )}
          {e === "infantry" && (
            <div className={CS.type}>
              <img src={iconUrl(e)} alt="icon" />
              <span>Пехота</span>
            </div>
          )}
          {e === "leadership" && (
            <div className={CS.type}>
              <img src={iconUrl(e)} alt="icon" />
              <span>Лидерство</span>
            </div>
          )}
          {e === "integration" && (
            <div className={CS.type}>
              <img src={iconUrl(e)} alt="icon" />
              <span>Соединение</span>
            </div>
          )}
          {e === "attack" && (
            <div className={CS.type}>
              <img src={iconUrl(e)} alt="icon" />
              <span>Атака</span>
            </div>
          )}
          {e === "defense" && (
            <div className={CS.type}>
              <img src={iconUrl(e)} alt="icon" />
              <span>Защита</span>
            </div>
          )}
          {e === "mobility" && (
            <div className={CS.type}>
              <img src={iconUrl(e)} alt="icon" />
              <span>Мобильность</span>
            </div>
          )}
          {e === "support" && (
            <div className={CS.type}>
              <img src={iconUrl(e)} alt="icon" />
              <span>Поддержка</span>
            </div>
          )}
          {e === "garrison" && (
            <div className={CS.type}>
              <img src={iconUrl(e)} alt="icon" />
              <span>Гарнизон</span>
            </div>
          )}

          {e === "gathering" && (
            <div className={CS.type}>
              <img src={iconUrl(e)} alt="icon" />
              <span>Сбор</span>
            </div>
          )}
          {e === "peacekeeping" && (
            <div className={CS.type}>
              <img src={iconUrl(e)} alt="icon" />
              <span>Миротворчество</span>
            </div>
          )}
          {e === "conquering" && (
            <div className={CS.type}>
              <img src={iconUrl(e)} alt="icon" />
              <span>Завоевание</span>
            </div>
          )}
          {e === "versatility" && (
            <div className={CS.type}>
              <img src={iconUrl(e)} alt="icon" />
              <span>Гибкость</span>
            </div>
          )}
          {e === "skill" && (
            <div className={CS.type}>
              <img src={iconUrl(e)} alt="icon" />
              <span>Навык</span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default CommanderTag
