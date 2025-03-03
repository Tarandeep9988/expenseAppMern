import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </>
  )
}


export function ProtectedRoutes(props) {
  if (localStorage.getItem('user')) {
    return props.children;
  }
  else {
    return <Navigate to='/login' />
  }
}



export default App
