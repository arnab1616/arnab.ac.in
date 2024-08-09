import React, { useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import Modals from './Modals'
import { Outlet, useNavigate } from 'react-router-dom';

export default function Portfolio() {
  const navigate = useNavigate();
  const [nav, setNav] = useState(1)
  const setIcon = (i)=>{
    localStorage.setItem('navvalue',i)
    setNav(i)
    console.log(icon)

  }
  return (
  <>
    <div className='content'>
      <div className='cover-block'></div>
      <div className='container about-container'>
        <div className="title-section text-start text-sm-center">
          <h1>my <span>portfolio</span></h1><span className="title-bg">Works</span>
        </div>
        <div className="portfolio-main">
          <div className="react-tabs" data-rttabs="true">
            <ul data-aos="fade-up" className="portfolio-tab-list aos-init aos-animate" role="tablist">
              <li className="react-tabs__tab react-tabs__tab--selected" role="tab" id="tab:r1:0" aria-selected="true" aria-disabled="false" aria-controls="panel:r1:0" data-rttab="true" tabindex="0" onClick={()=>{navigate('all');setNav(1)}} style={{color: nav===1?"#ffc107":""}}>ALL</li>
              <li className="react-tabs__tab" role="tab" id="tab:r1:1" aria-selected="false" aria-disabled="false" aria-controls="panel:r1:1" data-rttab="true" onClick={()=>{navigate('logo');setNav(2)}} style={{color: nav===2?"#ffc107":""}}>LOGO</li>
              <li className="react-tabs__tab" role="tab" id="tab:r1:2" aria-selected="false" aria-disabled="false" aria-controls="panel:r1:2" data-rttab="true" onClick={()=>{navigate('video');setNav(3)}} style={{color: nav===3?"#ffc107":""}}>VIDEO</li>
              <li className="react-tabs__tab" role="tab" id="tab:r1:3" aria-selected="false" aria-disabled="false" aria-controls="panel:r1:3" data-rttab="true" onClick={()=>{navigate('graphic');setNav(4)}} style={{color: nav===4?"#ffc107":""}}>GRAPHIC DESIGN</li>
              <li className="react-tabs__tab" role="tab" id="tab:r1:4" aria-selected="false" aria-disabled="false" aria-controls="panel:r1:4" data-rttab="true" onClick={()=>{navigate('mockup');setNav(5)}} style={{color: nav===5?"#ffc107":""}}>MOCKUP</li>
            </ul>
            <div className="container">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modals/>
  </>
  )
}
