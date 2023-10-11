import { useState } from "react"
import Toggle from "../components/Toggle"
import Show from "../components/Show"
import Maths from "../components/Maths"
import MyForm from "../components/MyForm"
import PropDrilling from "../components/PropDrilling"
import Context from "../components/Context"
import Fetching from "../components/Fetching"
import Children from "../components/Children"

function FunkyExamples() {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(previousShow => !previousShow)

  return (
    <div className="Container">
      <h1>Liisa</h1>
      <Children>
        <Fetching />
        <PropDrilling />
        <Context />
        <MyForm />
        <Maths />
        <Toggle toggleShow={toggleShow} />
        {show && <Show />}
      </Children>
    </div>
  )
}

export default FunkyExamples
