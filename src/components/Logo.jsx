import React from 'react'
import {motion} from 'framer-motion'

export default function Logo() {
  return (
    <>
            <div className="tab-container">
                <motion.div data-aos="fade-right" initial={{opacity:0, translateX:-50}} whileInView={{opacity:1,translateX:0, transition:{delay:0.2, duration:1}}} viewport={{once:false, amount: .5}} data-aos-delay="0" className="aos-init aos-animate" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                  <div className="tab-content">
                    <img alt="portfolio project demo" src='/assets/images/MUSIC SOUL (3).png' loading="lazy" style={{color: "transparent"}} />
                    <h3><span className="conent-title">Music Soul Logo</span></h3>
                  </div>
                </motion.div>
                <motion.div data-aos="fade-right" initial={{opacity:0, translateX:-50}} whileInView={{opacity:1,translateX:0, transition:{delay:0.2, duration:1}}} viewport={{once:false, amount: .5}} data-aos-delay="100" className="aos-init" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                  <div className="tab-content">
                    <img alt="portfolio project demo" src='/assets/images/title logo (2).png'  loading="lazy" style={{color: "transparent"}} />
                    <h3><span className="conent-title">My portfolio log</span></h3>
                  </div>
                </motion.div>
                <motion.div data-aos="fade-right" initial={{opacity:0, translateX:-50}} whileInView={{opacity:1,translateX:0, transition:{delay:0.2, duration:1}}} viewport={{once:false, amount: .5}} data-aos-delay="100" className="aos-init" data-bs-toggle="modal" data-bs-target="#exampleModal7">
                  <div className="tab-content">
                    <img alt="portfolio project demo" src='/assets/images/VIM (2).png'  loading="lazy" style={{color: "transparent"}} />
                    <h3><span className="conent-title">VIM CORN LOGO</span></h3>
                  </div>
                </motion.div>
              </div>
    </>
  )
}
