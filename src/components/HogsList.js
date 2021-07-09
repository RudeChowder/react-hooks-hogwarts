import React, { useState } from "react"
import HogTile from "./HogTile"

const HogsList = ({ hogs }) => {
  const [activeHog, setActiveHog] = useState("")

  

  const listOfHogs = hogs.map(hog => {
    const handleHogSelect = () => {
      setActiveHog(hog.name)
    }
    return (
      <HogTile 
        key={hog.name}
        name={hog.name}
        specialty={hog.specialty}
        greased={hog.greased}
        weight={hog.weight}
        highestMedalAchieved={hog["highest medal achieved"]}
        image={hog.image}
        activeHog={activeHog}
        onHogSelect={handleHogSelect}
      />
    )
  })

  return (
    <div className="ui grid container">
      {listOfHogs}
    </div>
  )
}

export default HogsList