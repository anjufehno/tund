import React from "react"

// const Hello = props => {
//   return <div>Teree {props.name}</div>
// }

// const Hello = props => {
//   const name = props.name

//   return <div>Teree {name}</div>
// }

// const Hello = props => {
//   const { name } = props

//   return <div>Teree {name}</div>
// }

// const Hello = ({ name }) => {
//   return <div>Teree {name}</div>
// }

const Hello = ({ name, age }) => (
  <div>
    Hello {name} {age}!
  </div>
)

export default Hello