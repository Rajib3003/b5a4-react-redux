import { Outlet } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
// import { Button } from "./components/ui/button"


function App() {


  return (
    <>
     <Navbar />
     <Outlet />
    </>
  )
}

export default App
