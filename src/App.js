import React from "react"
import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/UI/Navbar/Navbar"
import AppRouter from "./components/AppRouter"
import "./styles/index.scss"
import "./styles/container.scss"
import Footer from "./components/UI/Footer/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content container">
          <AppRouter />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
