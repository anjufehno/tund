import React from "react"

const Show = ({ show }) => {
  return <div> {show ? <h2>Showing</h2> : <h2>Not showing</h2>}</div>
}

export default Show