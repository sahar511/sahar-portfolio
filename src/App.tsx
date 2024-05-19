import { Outlet } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <section className="container">
        <Header></Header>
        <Outlet />
      </section>
      <Footer></Footer>
    </>
  )
}
export default App
