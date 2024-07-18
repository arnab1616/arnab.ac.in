import React from 'react'

export default function Contact() {
  return (
    <div className='content'>
      <div className='cover-block'></div>
      <div className='container about-container'>
        <div className="title-section text-start text-sm-center">
          <h1>Get in <span>touch</span></h1><span className="title-bg">Contact</span>
        </div>
        <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
          <div class="row">
            <div class="col-12 col-lg-4">
              <h3 class="text-uppercase custom-title mb-0 ft-wt-600 pb-3">Don't be shy !</h3>
              <p class="open-sans-font mb-4">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
              <p class="open-sans-font custom-span-contact position-relative"><i class="bi bi-sign-turn-right-fill position-absolute"></i><span class="d-block">Address Point</span>Bikash Guha Colony, Kolkata, Garia , West Bengal 700099.</p>
              <p class="open-sans-font custom-span-contact position-relative"><i class="bi bi-envelope-at-fill position-absolute"></i><span class="d-block">mail me</span> <a href="mailto:arnabc.1616@gmail.com" >arnabc.1616@gmail.com</a></p>
              <p class="open-sans-font custom-span-contact position-relative"><i class="bi bi-telephone-plus-fill position-absolute"></i><span class="d-block">call me</span> <a href="Tel: +91 9382522438" >+91 9382522438</a></p>
              <ul class="social list-unstyled pt-1 mb-5">
                <li><a href="https://www.facebook.com/arnabvs.arshi" target="_blank" rel="noreferrer" ><i class="bi bi-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/arnab.1616/" target="_blank" rel="noreferrer" ><i class="bi bi-instagram"></i></a></li>
                <li><a href="https://www.youtube.com/@arnabc.1616" target="_blank" rel="noreferrer" ><i class="bi bi-youtube"></i></a></li>
                <li><a href="https://github.com/arnab1616" target="_blank" rel="noreferrer" ><i class="bi bi-github"></i></a></li>
              </ul>
            </div>
            <div class="col-12 col-lg-8">
              <form id="myForm" class="contactform">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <input type="text" name="name" placeholder="YOUR NAME" required />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <input type="email" name="user_email" placeholder="YOUR EMAIL" required />
                    </div>
                  </div>
                  <div class="col-12 col-md-12">
                    <div class="form-group">
                      <input type="text" name="subject" placeholder="YOUR SUBJECT" required  />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <textarea name="message" placeholder="YOUR MESSAGE" required="" ></textarea>
                    </div>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="button" fdprocessedid="viv9q" ><span class="button-text">Send Message</span><span class="button-icon bi bi-send-fill"></span></button>
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
