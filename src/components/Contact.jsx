import React, { useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const [input, setInput] = useState({});
  const [close, setClose] = useState(false);
  const [error, setError] = useState(false);
  const sendMassage = async (e) =>{
    e.preventDefault();
    try{
      const messageData = await axios.post('https://arnab-ac-in-backend.onrender.com/message',input);
      console.log(messageData.data);
      setClose(true);
      setInput({});

    }catch(err){
      console.log(err);
      setError(true);
    }
    
  }
  const userInput = (e) =>{
    const {name,value} = e.target;
    setInput((prev)=>({
      ...prev,[name]:value
    }))
  }
  return (
    <div className='content' style={{overflow:'hidden'}}>
      <div className='p-2 px-4 position-fixed' style={{background:'#ffb400', position:'absolute', right:'0',borderBottomLeftRadius:'35px',top:'0',zIndex:'5',transition:'ease-in-out 200ms', transform: close?'scaleX(1)':'scaleX(0)'}}>
        <div className='d-flex align-items-center'>
          <i className='bi bi-x-circle-fill me-1 fs-5' role='button' style={{color:'black',cursor:'pointer'}} onClick={()=>{setClose(false)}}></i>
          <p className='m-0 px-1' style={{color:'black', textTransform:'capitalize', fontWeight:'bold'}}> {error?"Something went wrong!":"Message send successful!"}</p>
        </div>
      </div>
      <div className='cover-block'></div>
      <div className='container about-container'>
        <div className="title-section text-start text-sm-center">
          <h1>Get in <span>touch</span></h1><span className="title-bg">Contact</span>
        </div>
        <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
          <div className="row">
            <div className="col-12 col-lg-4">
              <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">Don't be shy !</h3>
              <p className="open-sans-font mb-4">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
              <p className="open-sans-font custom-span-contact position-relative"><i className="bi bi-sign-turn-right-fill position-absolute"></i><span className="d-block">Address Point</span>Bikash Guha Colony, Kolkata, Garia , West Bengal 700099.</p>
              <p className="open-sans-font custom-span-contact position-relative"><i className="bi bi-envelope-at-fill position-absolute"></i><span className="d-block">mail me</span> <a href="mailto:arnabc.1616@gmail.com" >arnabc.1616@gmail.com</a></p>
              <p className="open-sans-font custom-span-contact position-relative"><i className="bi bi-telephone-plus-fill position-absolute"></i><span className="d-block">call me</span> <a href="Tel: +91 9382522438" >+91 9382522438</a></p>
              <ul className="social list-unstyled pt-1 mb-5">
                <li><a href="https://www.facebook.com/arnabvs.arshi" target="_blank" rel="noreferrer" ><i className="bi bi-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/arnab.1616/" target="_blank" rel="noreferrer" ><i className="bi bi-instagram"></i></a></li>
                <li><a href="https://www.youtube.com/@arnabc.1616" target="_blank" rel="noreferrer" ><i className="bi bi-youtube"></i></a></li>
                <li><a href="https://github.com/arnab1616" target="_blank" rel="noreferrer" ><i className="bi bi-github"></i></a></li>
              </ul>
            </div>
            <div className="col-12 col-lg-8">
              <form id="myForm" className="contactform" onSubmit={sendMassage}>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input onChange={userInput} value={close?'': input.name} type="text" name="name" placeholder="YOUR NAME" required />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input onChange={userInput} value={close?'': input.user_email} type="email" name="user_email" placeholder="YOUR EMAIL" required />
                    </div>
                  </div>
                  <div className="col-12 col-md-12">
                    <div className="form-group">
                      <input onChange={userInput} value={close?'': input.subject} type="text" name="subject" placeholder="YOUR SUBJECT" required  />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea onChange={userInput} value={close?'': input.message} name="message" placeholder="YOUR MESSAGE" required ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="button" fdprocessedid="viv9q" ><span className="button-text">Send Message</span><span className="button-icon bi bi-send-fill"></span></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
