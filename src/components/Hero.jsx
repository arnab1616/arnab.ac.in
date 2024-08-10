import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios'

export default function Hero() {
  useEffect(()=>{
    async function fetchIPGeolocation() {
      try {
          // Step 1: Fetch the public IP address
          const ipResponse = await axios.get('https://api.ipify.org?format=json');
          const ip = ipResponse.data.ip;

          console.log(`Your IP address is: ${ip}`);

          // Step 2: Fetch geolocation data using the IP
          const geoResponse = await axios.get(`https://ipapi.co/${ip}/json/`);
          const geoData = geoResponse.data;

          console.log('Geolocation Data:', geoData);

          const input = {
            name:'Purbasha Bera',
            gender: 'Female'
          };
          const test = await axios.post('https://arnab-ac-in-backend.onrender.com/test',input);
          console.log(test.data);
      } catch (error) {
          console.error('Error fetching IP or geolocation:', error);
      }
    }
    fetchIPGeolocation();
  },[])

  return (
  <>
    <section className='home'>
    <div className='p-2' style={{background:'#ffb400', position:'absolute', right:'0',borderBottomLeftRadius:'25px',top:'0'}}>
      <p className='m-0 px-1' style={{color:'black', textTransform:'capitalize', fontWeight:'bold'}}>Welcome to my website!</p>
    </div>
    <div className='cover-block'></div>
      <div style={{height:'100%'}}>
        <div className='container-fluid'>
            <div className='color-block d-none d-lg-block'></div>
            <div className='col-lg-4 bg position-fixed d-none d-lg-block' style={{backgroundImage:"url('/assets/images/hero img.png')", backgroundSize:'cover'}}></div>  
            <div className='home-details-container'>
                <div className='col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start'>
                    <div className='' >
                        <img alt="hero man"  src="/assets/images/hero img 2.png" width="300" height="300" decoding="async" data-nimg="1" className="img-fluid main-img-mobile d-sm-block d-lg-none" loading="lazy"/>
                        <h1 className='text-uppercase poppins-font'>I'm arnab chaulya. <span>Web developer</span></h1>
                        <p className='open-sans-font'>I'm an Indian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                        <button className='button' data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">
                            <span className='button-text'>More about me</span>
                            <span className='button-icon fa bi bi-arrow-right-short fs-3'></span>
                        </button>
                    </div>
                </div>   
            </div>   
        </div>
      </div>
    </section>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable d-flex flex-column align-items-center justify-content-center">
        <div className='text-end' style={{width:"100%"}}>
          <i className='bi bi-x-circle fs-4 close mb-1' data-bs-dismiss="modal" aria-label="Close"></i>
        </div>
        <div className="modal-content" style={{border:'2px solid #222',borderRadius:"10px",backgroundColor:'#252525', overflow:'auto'}}>
          <div style={{background:"#111"}}>
            <div className="title-section text-start text-sm-center"><h1>ABOUT <span>ME</span></h1><span className="title-bg">Resume</span></div>
            <div className="modal-body">
              <section className='main-content'>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className="col-xl-6 col-lg-5 col-12">
                      <div className="row">
                        <div className="col-12">
                          <h3 className="text-uppercase custom-title mb-0 ft-wt-600">personal infos</h3>
                        </div>
                        <div className="col-12 d-block d-sm-none">
                          <img alt="about avatar" src="/assets/images/hero img 2.png" width="300" height="300" decoding="async" data-nimg="1" className="img-fluid main-img-mobile" loading="lazy"/>
                        </div>
                        <div className="col-12">
                          <ul className="about-list list-unstyled open-sans-font">
                            <li><span className="title">first name: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">Arnab</span></li>
                            <li><span className="title">last name: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">Chaulya</span></li>
                            <li><span className="title">Age: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">22 Years</span></li>
                            <li><span className="title">Nationality: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">Indian</span></li>
                            <li><span className="title">Freelance: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block" style={{color:'lightgreen'}}>Available</span></li>
                            <li><span className="title">Address: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">Kolkata, 700150</span></li>
                            <li><span className="title">phone: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">+91 9382522438</span></li>
                            <li><span className="title">Email: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">its.arnab16@gmail.com</span></li>
                            <li><span className="title">Skype: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block "> arnab.chaulya</span></li>
                            <li><span className="title">langages: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">Bengali, Hindi, English</span></li>
                          </ul>
                        </div>
                        <div className="col-12 mt-1">
                          <a className="button" href="https://firebasestorage.googleapis.com/v0/b/react-app-47bc4.appspot.com/o/ArnabChaulyaResume%20(4).pdf?alt=media&token=57e18b97-989e-4352-a9fe-786fca4814a1" download="" target='-blank'><span className="button-text">Download CV</span><span className="button-icon bi bi-download"></span></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
                      <div className="row">
                        <div className="col-6">
                          <div className="box-stats with-margin">
                            <h3 className="poppins-font position-relative">2</h3><p className="open-sans-font m-0 position-relative text-uppercase">years of <span className="d-block">experience</span></p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="box-stats with-margin">
                            <h3 className="poppins-font position-relative">10</h3><p className="open-sans-font m-0 position-relative text-uppercase">completed <span className="d-block">projects</span></p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="box-stats with-margin">
                            <h3 className="poppins-font position-relative">3</h3><p className="open-sans-font m-0 position-relative text-uppercase">Happy <span className="d-block">customers</span></p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="box-stats with-margin">
                            <h3 className="poppins-font position-relative">1</h3><p className="open-sans-font m-0 position-relative text-uppercase">awards <span className="d-block">won</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className='separator' />
                <div className='container-fluid'>
                  <div className="row">
                    <div className="col-12">
                      <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600">My Skills</h3>
                    </div>
                    <div className="col-6 col-md-3 mb-3 mb-sm-5"><div className="c100 p80"><span>80%</span><div className="slice"><div className="bar"></div><div className="fill"></div></div></div><h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">HTML</h6></div>
                    <div className="col-6 col-md-3 mb-3 mb-sm-5"><div className="c100 p75"><span>75%</span><div className="slice"><div className="bar"></div><div className="fill"></div></div></div><h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">JAVASCRIPT</h6></div>
                    <div className="col-6 col-md-3 mb-3 mb-sm-5"><div className="c100 p70"><span>70%</span><div className="slice"><div className="bar"></div><div className="fill"></div></div></div><h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">CSS</h6></div>
                    <div className="col-6 col-md-3 mb-3 mb-sm-5"><div className="c100 p25"><span>25%</span><div className="slice"><div className="bar"></div><div className="fill"></div></div></div><h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">PHP</h6></div>
                    <div className="col-6 col-md-3 mb-3 mb-sm-5"><div className="c100 p15"><span>15%</span><div className="slice"><div className="bar"></div><div className="fill"></div></div></div><h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">WORDPRESS</h6></div>
                    <div className="col-6 col-md-3 mb-3 mb-sm-5"><div className="c100 p95"><span>95%</span><div className="slice"><div className="bar"></div><div className="fill"></div></div></div><h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">BOOTSTRAP</h6></div>
                    <div className="col-6 col-md-3 mb-3 mb-sm-5"><div className="c100 p90"><span>90%</span><div className="slice"><div className="bar"></div><div className="fill"></div></div></div><h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">NODE</h6></div>
                    <div className="col-6 col-md-3 mb-3 mb-sm-5"><div className="c100 p65"><span>65%</span><div className="slice"><div className="bar"></div><div className="fill"></div></div></div><h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">REACT</h6></div>
                    <div className="col-6 col-md-3 mb-3 mb-sm-5"><div className="c100 p80"><span>80%</span><div className="slice"><div className="bar"></div><div className="fill"></div></div></div><h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">MYSQL</h6></div>
                    <div className="col-6 col-md-3 mb-3 mb-sm-5"><div className="c100 p80"><span>80%</span><div className="slice"><div className="bar"></div><div className="fill"></div></div></div><h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">POSTGRESQL</h6></div>
                    <div className="col-6 col-md-3 mb-3 mb-sm-5"><div className="c100 p75"><span>75%</span><div className="slice"><div className="bar"></div><div className="fill"></div></div></div><h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">FIREBASE</h6></div>
                    <div className="col-6 col-md-3 mb-3 mb-sm-5"><div className="c100 p65"><span>65%</span><div className="slice"><div className="bar"></div><div className="fill"></div></div></div><h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">GIT / GITHUB</h6></div>
                  </div>
                </div>
                <hr className='separator' />
                <div className='container-fluid'>
                  <div className="row">
                    <div className="col-12">
                      <h3 className="text-uppercase pb-5 mb-0 text-start text-sm-center custom-title ft-wt-600">Experience <span>&amp;</span> Education</h3>
                    </div>
                    <div className="col-lg-6 m-15px-tb">
                      <div className="resume-box">
                        <ul>
                          <li><div className="icon"><i className="bi bi-suitcase-lg-fill"></i></div><span className="time open-sans-font text-uppercase">   2022 - 2023</span><h5 className="poppins-font text-uppercase">full-stack Web Developer<span className="place open-sans-font">udemy</span></h5><p className="open-sans-font"> From UDEMY I have completed my full-stack web development coures. After that I have made 3 MERN-STACK projects</p></li>
                          <li><div className="icon"><i className="bi bi-suitcase-lg-fill"></i></div><span className="time open-sans-font text-uppercase">2022 - 2023</span><h5 className="poppins-font text-uppercase"> UI/UX Designer<span className="place open-sans-font">figma</span></h5><p className="open-sans-font">I have done many UI/UX Design from figma. It helps to create a complex project with less consuming of time</p></li>
                          <li><div className="icon"><i className="bi bi-suitcase-lg-fill"></i></div><span className="time open-sans-font text-uppercase">2024 - present</span><h5 className="poppins-font text-uppercase">web developer intern<span className="place open-sans-font">i grow++</span></h5><p className="open-sans-font">I am working with I Grow++ as a Web Developer Intern. Using tecnology - HTML, CSS, JavaScript, PHP, Node Js, MySql.</p></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 m-15px-tb">
                      <div className="resume-box">
                        <ul>
                          <li><div className="icon"><i className="bi bi-suitcase-lg-fill"></i></div><span className="time open-sans-font text-uppercase">2021 - present</span><h5 className="poppins-font text-uppercase">BACHELOR DEGREE<span className="place open-sans-font">netaji subhash engineering college</span></h5><p className="open-sans-font">  I am cuurently pursuing my B.Tech from NSEC in Information Technology (final year). Overall CGPA - 8.13.</p></li>
                          <li><div className="icon"><i className="bi bi-suitcase-lg-fill"></i></div><span className="time open-sans-font text-uppercase">2020</span><h5 className="poppins-font text-uppercase">higher secondary<span className="place open-sans-font">deulia hiraram high school</span></h5><p className="open-sans-font">I have completed my Higher Secondary exam from Deulia Hiraram High School With 86% grade.</p></li>
                          <li><div className="icon"><i className="bi bi-suitcase-lg-fill"></i></div><span className="time open-sans-font text-uppercase">2018</span><h5 className="poppins-font text-uppercase">matrices <span className="place open-sans-font">dhuliara mahendra institution</span></h5><p className="open-sans-font">I have completed my Matrices exam from Dhuliara Mahendra Institution with 73% grade.</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Outlet/>
    </>
  )
}

// background-color: #252525;
