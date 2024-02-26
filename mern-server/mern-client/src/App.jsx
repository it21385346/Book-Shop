
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import MyFooter from './components/MyFooter'

function App() {


  return (
    <div>
    <Navbar/>
      <Outlet/>
      <MyFooter/>
    </div>
  )
}

export default App





