import { Outlet } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
// import { Button } from "./components/ui/button"


function App() {


  return (
    <>
    
    <div className="flex flex-col min-h-screen">
     {/* Navbar */}
    <Navbar />

    {/* Main content */}
    <main className="flex-1">
      <Outlet />
    </main>

    {/* Footer */}
    <Footer />
    </div>
    </>
    
  )
}

export default App
