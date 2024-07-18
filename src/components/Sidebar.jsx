import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Sidebar() {
  localStorage.setItem('iconValue',1)
  const [icon, setIconVal] = useState(1)
  const setIcon = (i)=>{
    localStorage.setItem('iconValue',i)
    setIconVal(i)
    console.log(icon)

  }
  
  const navigate = useNavigate();
  return (
    <>
        <div className="head">
            <ul className=" icon-menu">
                <li onClick={()=>{navigate('/');setIcon(1)}} className="icon-box active" style={{backgroundColor:icon===1?'#ffb400':''}}>
                  <Link to="/"><i className="bi bi-house-door-fill fs-6"></i><h2>Home</h2></Link>
                </li>
                <li onClick={()=>{navigate('/about');setIcon(2)}} className="icon-box" style={{backgroundColor:icon===2?'#ffb400':''}} >
                  <Link to="/about"><i className="bi bi-person-fill fs-6"></i><h2>About</h2></Link>
                </li>
                <li onClick={()=>{navigate('/portfolio');setIcon(3)}} className="icon-box" style={{backgroundColor:icon===3?'#ffb400':''}}>
                  <Link to='/portfolio' ><i className="bi bi-suitcase-lg-fill fs-6"></i><h2>Portfolio</h2></Link>
                </li>
                <li onClick={()=>{navigate('/contact');setIcon(4)}} className="icon-box" style={{backgroundColor:icon===4?'#ffb400':''}}>
                  <Link to='/contact'><i className="bi bi-envelope-open-fill fs-6"></i><h2>Contact</h2></Link>
                </li>
                <li onClick={()=>{navigate('/blog');setIcon(5)}} className="icon-box" style={{backgroundColor:icon===5?'#ffb400':''}}>
                  <Link to='/blog'><i className="bi bi-chat-square-heart-fill fs-6"></i><h2>Blog</h2></Link>
                </li>
            </ul>
        </div>
    </>
  )
}
