import { Route, Routes } from "react-router-dom"
import Home from "./component/Home"
import CollectionPage from "./pages/CollectionPage"
import Navbar from "./component/Navbar"
import { ToastContainer } from "react-toastify"


function App() {

  return (
   <>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/collection" element={<CollectionPage />} />
   </Routes>

   <ToastContainer />
   
   </>
  )
}

export default App
