import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
        <div className="head">
            <ul className=" icon-menu">
                <li onClick={()=>navigate('/')} className="icon-box active">
                  <Link to="/"><i className="bi bi-house-door-fill fs-6"></i><h2>Home</h2></Link>
                </li>
                <li onClick={()=>navigate('/about')} className="icon-box" >
                  <Link to="/about"><i className="bi bi-person-fill fs-6"></i><h2>About</h2></Link>
                </li>
                <li onClick={()=>navigate('/portfolio')} className="icon-box" >
                  <Link to='/portfolio' ><i className="bi bi-suitcase-lg-fill fs-6"></i><h2>Portfolio</h2></Link>
                </li>
                <li onClick={()=>navigate('/contact')} className="icon-box" >
                  <Link to='/contact'><i className="bi bi-envelope-open-fill fs-6"></i><h2>Contact</h2></Link>
                </li>
                <li onClick={()=>navigate('/blog')} className="icon-box" >
                  <Link to='/blog'><i className="bi bi-chat-square-heart-fill fs-6"></i><h2>Blog</h2></Link>
                </li>
            </ul>
        </div>
    </>
  )
}
