import React from "react"

const HogTile = ({ name, specialty, greased, weight, highestMedalAchieved, image, activeHog, onHogSelect }) => {
  return (
    <div className="ui eight wide column" onClick={onHogSelect}>
      <h3 className="name">{name}</h3>
      <img className={activeHog === name ? "minPigTile" : "maxPigTile"} src={image} alt={name}></img>
      <ul hidden={activeHog === name ? false : true}>
        <li>Specialty: {specialty}</li>
        <li>{greased ? "Greased" : "Ungreased"}</li>
        <li>Weight: {weight} {weight === 1 ? "ton" : "tons"}</li>
        <li>Highest Medal Achieved: {highestMedalAchieved}</li>
      </ul>
    </div>
  )
}

export default HogTile