import React from "react"

const Filter = ({ activeGrease, setActiveGrease, sortHogs, setSortHogs }) => {
const onGreaseChange = (e) => {
  setActiveGrease(e.target.value)
}
const onSortChange = (e) => {
  setSortHogs(e.target.value)
}
  return (
    <div className="filterWrapper">
      <label>Filter by Greasiness: </label>
      <select value={activeGrease} onChange={onGreaseChange}>
        <option value="All">All</option>
        <option value={true}>Greased</option>
        <option value={false}>Not Greased</option>
      </select>
      <label> Sort by Name or Weight: </label>
      <select value={sortHogs} onChange={onSortChange}>
        <option value="None">None</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  )
}

export default Filter