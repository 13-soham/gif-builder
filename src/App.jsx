import CollectionPage from "./Pages/CollectionPage";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <div className='min-h-screen w-full bg-gray-800 text-white px-7 py-5'>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/collection" element={<CollectionPage/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App;