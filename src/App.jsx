import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Blogs from './components/Blogs'
import All from './components/All'
import Logo from './components/Logo'
import Mockup from './components/Mockup'
import Video from './components/Video'
import Graphic from './components/Graphic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/portfolio' element={<Portfolio/>} >
          <Route index element={<All/>} />
          <Route path='all' element={<All/>} />
          <Route path='logo' element={<Logo/>} />
          <Route path='video' element={<Video/>} />
          <Route path='graphic' element={<Graphic/>} />
          <Route path='mockup' element={<Mockup/>} />
        </Route>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blogs/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
