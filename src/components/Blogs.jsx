import React from 'react'
import { motion } from 'framer-motion'


export default function Blogs() {
  return (
    <>
    <div className='content'>
      <div className='cover-block'></div>
      <div className='container about-container blog'>
        <div className="title-section text-start text-sm-center">
          <h1>my <span>blogs</span></h1><span className="title-bg">posts</span>
        </div>
        <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
          <div className="row pb-50">
            <div className="row" id="modal">
              <motion.div initial={{opacity:0, translateX:-50}} whileInView={{opacity:1,translateX:0, transition:{delay:0.2, duration:1}}} className="col-12 col-md-6 col-lg-6 col-xl-4 mb-5"><article className="post-container"><div className="post-thumb"><div className="d-block position-relative overflow-hidden"><img alt="item.title" src='https://tunis-nextjs.netlify.app/_ipx/w_1920,q_75/%2F_next%2Fstatic%2Fmedia%2Fblog-post-1.26de9082.jpg?url=%2F_next%2Fstatic%2Fmedia%2Fblog-post-1.26de9082.jpg&w=1920&q=75' width="895" height="552" decoding="async" data-nimg="1" className="img-fluid" loading="lazy" style={{color: "transparent"}} /></div></div><div className="post-content"><div className="entry-header"><h3>How to Own Your Audience by Creating an Email List</h3></div><div className="entry-content open-sans-font"><p>Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b</p></div></div></article></motion.div>
              <motion.div initial={{opacity:0, translateX:-50}} whileInView={{opacity:1,translateX:0, transition:{delay:0.2, duration:1}}} className="col-12 col-md-6 col-lg-6 col-xl-4 mb-5"><article className="post-container"><div className="post-thumb"><div className="d-block position-relative overflow-hidden"><img alt="item.title" src='https://tunis-nextjs.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-post-2.3f2d89f0.jpg&w=1920&q=75' width="895" height="552" decoding="async" data-nimg="1" className="img-fluid" loading="lazy" style={{color: "transparent"}} /></div></div><div className="post-content"><div className="entry-header"><h3>Top 10 Toolkits for Deep Learning in 2022</h3></div><div className="entry-content open-sans-font"><p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e</p></div></div></article></motion.div>
              <motion.div initial={{opacity:0, translateX:-50}} whileInView={{opacity:1,translateX:0, transition:{delay:0.2, duration:1}}} className="col-12 col-md-6 col-lg-6 col-xl-4 mb-5"><article className="post-container"><div className="post-thumb"><div className="d-block position-relative overflow-hidden"><img alt="item.title" src='https://tunis-nextjs.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-post-3.aaa1f372.jpg&w=1920&q=75' width="895" height="552" decoding="async" data-nimg="1" className="img-fluid" loading="lazy" style={{color: "transparent"}} /></div></div><div className="post-content"><div className="entry-header"><h3>Everything You Need to Know About Web Accessibility</h3></div><div className="entry-content open-sans-font"><p>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma</p></div></div></article></motion.div>
              <motion.div initial={{opacity:0, translateX:-50}} whileInView={{opacity:1,translateX:0, transition:{delay:0.2, duration:1}}} className="col-12 col-md-6 col-lg-6 col-xl-4 mb-5"><article className="post-container"><div className="post-thumb"><div className="d-block position-relative overflow-hidden"><img alt="item.title" src='https://tunis-nextjs.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-post-4.61f2f58c.jpg&w=1920&q=75' width="895" height="552" decoding="async" data-nimg="1" className="img-fluid" loading="lazy" style={{color: "transparent"}} /></div></div><div className="post-content"><div className="entry-header"><h3>How to Inject Humor &amp; Comedy Into Your Brand</h3></div><div className="entry-content open-sans-font"><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es</p></div></div></article></motion.div>
              <motion.div initial={{opacity:0, translateX:-50}} whileInView={{opacity:1,translateX:0, transition:{delay:0.2, duration:1}}} className="col-12 col-md-6 col-lg-6 col-xl-4 mb-5"><article className="post-container"><div className="post-thumb"><div className="d-block position-relative overflow-hidden"><img alt="item.title" src='https://tunis-nextjs.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-post-5.e83704c7.jpg&w=1920&q=75' width="895" height="552" decoding="async" data-nimg="1" className="img-fluid" loading="lazy" style={{color: "transparent"}} /></div></div><div className="post-content"><div className="entry-header"><h3>Women in Web Design: How To Achieve Success</h3></div><div className="entry-content open-sans-font"><p>Jorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p></div></div></article></motion.div>
              <motion.div initial={{opacity:0, translateX:-50}} whileInView={{opacity:1,translateX:0, transition:{delay:0.2, duration:1}}} className="col-12 col-md-6 col-lg-6 col-xl-4 mb-5"><article className="post-container"><div className="post-thumb"><div className="d-block position-relative overflow-hidden"><img alt="item.title" src='https://tunis-nextjs.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-post-6.2b6b686b.jpg&w=1920&q=75' width="895" height="552" decoding="async" data-nimg="1" className="img-fluid" loading="lazy" style={{color: "transparent"}} /></div></div><div className="post-content"><div className="entry-header"><h3>Evergreen versus topical content: An overview</h3></div><div className="entry-content open-sans-font"><p>Still ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p></div></div></article></motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
