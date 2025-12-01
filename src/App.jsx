import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import Dashboard from './Pages/Dashboard'
import Coin from './Pages/Coin'
import ComparePage from './Pages/ComparePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/coin/:id' element={<Coin />}/>
          <Route path='/compare' element={<ComparePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
