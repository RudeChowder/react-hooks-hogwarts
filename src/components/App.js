import React, { useState } from "react";
import Nav from "./Nav";
import HogsList from "./HogsList";
import Filter from "./Filter";

import hogs from "../porkers_data";

function App() {
const [activeGrease, setActiveGrease] = useState("All")
const [sortHogs, setSortHogs] = useState("None")

const filteredHogs = hogs.filter(hog => {
  if (activeGrease === "All") {
    return true
  } else {
    return `${hog.greased}` === activeGrease
  }
})

const sortedHogs = () => {
  if (sortHogs === "None") {
    return filteredHogs
  } else if (sortHogs === "name") {
    return filteredHogs.sort((a, b) => a[sortHogs].localeCompare(b[sortHogs]))
  } else if (sortHogs === "weight") {
    return filteredHogs.sort((a, b) => b[sortHogs] - a[sortHogs])
  }
}


  return (
    <div className="App">
      <Nav />
      <Filter 
      activeGrease={activeGrease}
      setActiveGrease={setActiveGrease}
      sortHogs={sortHogs}
      setSortHogs={setSortHogs}
      />
      <HogsList 
        hogs={sortedHogs()}
      />
    </div>
  );
}

export default App;
