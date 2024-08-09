import React from 'react'
import { motion } from 'framer-motion'

export default function Mockup() {
  return (
    <div className="tab-container">
    <motion.div data-aos="fade-right" initial={{opacity:0, translateX:-50}} whileInView={{opacity:1,translateX:0, transition:{delay:0.2, duration:1}}} viewport={{once:false, amount: .5}} data-aos-delay="0" className="aos-init aos-animate" data-bs-toggle="modal" data-bs-target="#exampleModal" >
      <div className="tab-content">
        <img alt="portfolio project demo" src='/assets/images/hyggex.png' width="895" height="552" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} />
        <h3><span className="conent-title">mockup project</span></h3>
      </div>
    </motion.div>
    <motion.div data-aos="fade-right" initial={{opacity:0, translateX:-50}} whileInView={{opacity:1,translateX:0, transition:{delay:0.2, duration:1}}} viewport={{once:false, amount: .5}} data-aos-delay="200" className="aos-init" data-bs-toggle="modal" data-bs-target="#exampleModal5">
      <div className="tab-content">
        <img alt="portfolio project demo" src='/assets/images/jyuth.png' loading="lazy" style={{color: "transparent"}} />
        <h3><span className="conent-title">mockup project</span></h3>
      </div>
    </motion.div>
  </div>
  )
}
