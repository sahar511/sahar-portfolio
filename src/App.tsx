import "./App.css"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <section className="container">
        <Header></Header>
        <Outlet />
      </section>
    </div>
  )
}
export default App
