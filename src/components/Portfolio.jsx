import React from 'react'
import Modals from './Modals'

export default function Portfolio() {
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
              <li className="react-tabs__tab react-tabs__tab--selected" role="tab" id="tab:r1:0" aria-selected="true" aria-disabled="false" aria-controls="panel:r1:0" data-rttab="true" tabindex="0">ALL</li>
              <li className="react-tabs__tab" role="tab" id="tab:r1:1" aria-selected="false" aria-disabled="false" aria-controls="panel:r1:1" data-rttab="true">LOGO</li>
              <li className="react-tabs__tab" role="tab" id="tab:r1:2" aria-selected="false" aria-disabled="false" aria-controls="panel:r1:2" data-rttab="true">VIDEO</li>
              <li className="react-tabs__tab" role="tab" id="tab:r1:3" aria-selected="false" aria-disabled="false" aria-controls="panel:r1:3" data-rttab="true">GRAPHIC DESIGN</li>
              <li className="react-tabs__tab" role="tab" id="tab:r1:4" aria-selected="false" aria-disabled="false" aria-controls="panel:r1:4" data-rttab="true">MOCKUP</li>
            </ul>
            <div className="container">
              <div className="tab-container">
                <div data-aos="fade-right" data-aos-delay="0" className="aos-init aos-animate" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                  <div className="tab-content">
                    <img alt="portfolio project demo" src='/assets/images/title logo (2).png' width="895" height="552" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} />
                    <h3><span className="conent-title">mockup project</span></h3>
                  </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="100" className="aos-init aos-animate" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                  <div className="tab-content">
                    <img alt="portfolio project demo" src='/assets/images/title logo (2).png' loading="lazy" style={{color: "transparent"}} />
                    <h3><span className="conent-title">youtube project</span></h3>
                  </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="200" className="aos-init aos-animate" data-bs-toggle="modal" data-bs-target="#exampleModal2"> 
                  <div className="tab-content">
                    <img alt="portfolio project demo" src='/assets/images/title logo (2).png'  width="895" height="552" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} />
                    <h3><span className="conent-title">slider project</span></h3>
                  </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="0" className="aos-init aos-animate" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                  <div className="tab-content">
                    <img alt="portfolio project demo" src='/assets/images/title logo (2).png' loading="lazy" style={{color: "transparent"}} />
                    <h3><span className="conent-title">local project</span></h3>
                  </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="100" className="aos-init" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                  <div className="tab-content">
                    <img alt="portfolio project demo" src='/assets/images/title logo (2).png'  loading="lazy" style={{color: "transparent"}} />
                    <h3><span className="conent-title">saas project</span></h3>
                  </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="200" className="aos-init" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                  <div className="tab-content">
                    <img alt="portfolio project demo" src='/assets/images/title logo (2).png' loading="lazy" style={{color: "transparent"}} />
                    <h3><span className="conent-title">mockup project</span></h3>
                  </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="0" className="aos-init" data-bs-toggle="modal" data-bs-target="#exampleModal6">
                  <div className="tab-content">
                    <img alt="portfolio project demo" src='/assets/images/title logo (2).png' loading="lazy" style={{color: "transparent"}} />
                    <h3><span className="conent-title">facebook project</span></h3>
                  </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="100" className="aos-init" data-bs-toggle="modal" data-bs-target="#exampleModal7">
                  <div className="tab-content">
                    <img alt="portfolio project demo" src='/assets/images/title logo (2).png'  loading="lazy" style={{color: "transparent"}} />
                    <h3><span className="conent-title">dribble project</span></h3>
                  </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="200" className="aos-init" data-bs-toggle="modal" data-bs-target="#exampleModal8">
                  <div className="tab-content">
                    <img alt="portfolio project demo" src='/assets/images/title logo (2).png' loading="lazy" style={{color: "transparent"}} />
                    <h3><span className="conent-title">behence project</span></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modals/>
  </>
  )
}
