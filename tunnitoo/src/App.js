import logo from "./logo.svg"
import "./App.css"
import Hello from "./components/Hello"
import Maths from "./components/Maths"

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
