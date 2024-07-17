import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Blogs from './components/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blogs/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
