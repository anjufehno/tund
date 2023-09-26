import logo from "./logo.svg"
import "./App.css"
import Hello from "./components/Hello"
import Maths from "./components/Maths"
import Name from "./components/name"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Name />
        <Maths />
        <Maths />
        <Maths />
        {/* <Hello name="Raimo" />
        <Hello name="Mari" />
        <Hello
          name="Juhan"
          age={20}
          school="TLU"
        /> */}
      </header>
    </div>
  )
}

export default App
