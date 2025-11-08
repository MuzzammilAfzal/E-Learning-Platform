
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Layout from './components/Layout'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                  <Route path={"/"} element={<Home/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/signup' element={<SignUp/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
