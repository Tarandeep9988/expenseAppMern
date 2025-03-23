import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"

function App() {
  return (
    <div className='bg-black text-white h-screen select-none'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
