import { Outlet } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
// import { Button } from "./components/ui/button"


function App() {


  return (
    <>
    
    {/* <div className="container max-w-7xl mx-auto  max-w-5xl bg-white"> */}
     <Navbar />
     <Outlet />
     <Footer />
    {/* </div> */}
    </>
    
  )
}

export default App
