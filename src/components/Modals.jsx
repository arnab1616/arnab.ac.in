import React from 'react'

export default function Modals() {
  return (
    <>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable d-flex flex-column align-items-center justify-content-center">
        <div className='text-end' style={{width:"100%"}}>
          <i className='bi bi-x-circle fs-4 close mb-1' data-bs-dismiss="modal" aria-label="Close"></i>
        </div>
        <div className="modal-content" style={{border:'2px solid #222',borderRadius:"10px",backgroundColor:'#252525', overflow:'auto',padding:'2rem'}}>
          <div>
            <div className="modal_title text-start text-sm-center"><h2>mockup project</h2></div>
            <div className="modal-body">
              <div class="modal__details">
                <div class="row open-sans-font">
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-file-earmark-text pe-2"></i>Project: <span class="ft-wt-600 uppercase">Website</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-person pe-2"></i>Client : <span class="ft-wt-600 uppercase">Hyggex</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-code-slash pe-2"></i>Language : <span class="ft-wt-600 uppercase">HTML, CSS, Javascript, React js</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-box-arrow-up-right pe-2"></i>Preview : <a class="preview-link" target="_blank" rel="noopener noreferrer nofollow" href="https://hyggex-assignment-ebon.vercel.app/">www.hyggex.com</a></div>
                </div>
              </div>
              <figure class="modal__img">
                <img alt="portfolio project demo" src='/assets/images/hyggex.png' width="895" height="552" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable d-flex flex-column align-items-center justify-content-center">
        <div className='text-end' style={{width:"100%"}}>
          <i className='bi bi-x-circle fs-4 close mb-1' data-bs-dismiss="modal" aria-label="Close"></i>
        </div>
        <div className="modal-content" style={{border:'2px solid #222',borderRadius:"10px",backgroundColor:'#252525', overflow:'auto',padding:'2rem'}}>
          <div>
            <div className="modal_title text-start text-sm-center"><h2>youtube project</h2></div>
            <div className="modal-body">
              <div class="modal__details">
                <div class="row open-sans-font">
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-file-earmark-text pe-2"></i>Project: <span class="ft-wt-600 uppercase">Website</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-person pe-2"></i>Client : <span class="ft-wt-600 uppercase">Personal Website</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-code-slash pe-2"></i>Language : <span class="ft-wt-600 uppercase">HTML, CSS, Javascript, React js, Node js</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-box-arrow-up-right pe-2"></i>Preview : <a class="preview-link" target="_blank" rel="noopener noreferrer nofollow" href="https://www.loom.com/share/980783f4b86d4b379f93bb53d0b57e74?sid=85733265-6db5-4dc9-9af0-8119371342c4">www.loom.com</a></div>
                </div>
              </div>
              <figure class="modal__img">
                <img alt="portfolio project demo" src='/assets/images/vimcorn.png' width="895" height="552" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable d-flex flex-column align-items-center justify-content-center">
        <div className='text-end' style={{width:"100%"}}>
          <i className='bi bi-x-circle fs-4 close mb-1' data-bs-dismiss="modal" aria-label="Close"></i>
        </div>
        <div className="modal-content" style={{border:'2px solid #222',borderRadius:"10px",backgroundColor:'#252525', overflow:'auto',padding:'2rem'}}>
          <div>
            <div className="modal_title text-start text-sm-center"><h2>facebook reels project</h2></div>
            <div className="modal-body">
              <div class="modal__details">
                <div class="row open-sans-font">
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-file-earmark-text pe-2"></i>Project: <span class="ft-wt-600 uppercase">Reels making</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-person pe-2"></i>Client : <span class="ft-wt-600 uppercase">I Grow plus plus</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-code-slash pe-2"></i>Language : <span class="ft-wt-600 uppercase">HTML, CSS, Javascript</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-box-arrow-up-right pe-2"></i>Preview : <a class="preview-link" target="_blank" rel="noopener noreferrer nofollow" href="https://www.canva.com/design/DAGMJkALVZc/ugT_RN1dE8A86mrq521afw/edit?utm_content=DAGMJkALVZc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">www.canva.com</a></div>
                </div>
              </div>
              <figure class="modal__img">
                <img alt="portfolio project demo" src='/assets/images/facebook-reels.png' width="895" height="552" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable d-flex flex-column align-items-center justify-content-center">
        <div className='text-end' style={{width:"100%"}}>
          <i className='bi bi-x-circle fs-4 close mb-1' data-bs-dismiss="modal" aria-label="Close"></i>
        </div>
        <div className="modal-content" style={{border:'2px solid #222',borderRadius:"10px",backgroundColor:'#252525', overflow:'auto',padding:'2rem'}}>
          <div>
            <div className="modal_title text-start text-sm-center"><h2>Music Soul Logo</h2></div>
            <div className="modal-body">
              <div class="modal__details">
                <div class="row open-sans-font">
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-file-earmark-text pe-2"></i>Project: <span class="ft-wt-600 uppercase">Logo</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-person pe-2"></i>Client : <span class="ft-wt-600 uppercase">Music soul</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-code-slash pe-2"></i>Language : <span class="ft-wt-600 uppercase">Not available</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-box-arrow-up-right pe-2"></i>Preview : <a class="preview-link" target="_blank" rel="noopener noreferrer nofollow" href="https://www.canva.com/design/DAFf_6Z-ksg/XT3lrHgFmomMQpMephV-aQ/edit?utm_content=DAFf_6Z-ksg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">www.canva.com</a></div>
                </div>
              </div>
              <figure class="modal__img">
                <img alt="portfolio project demo" src='/assets/images/MUSIC SOUL (3).png' width="895" height="552" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable d-flex flex-column align-items-center justify-content-center">
        <div className='text-end' style={{width:"100%"}}>
          <i className='bi bi-x-circle fs-4 close mb-1' data-bs-dismiss="modal" aria-label="Close"></i>
        </div>
        <div className="modal-content" style={{border:'2px solid #222',borderRadius:"10px",backgroundColor:'#252525', overflow:'auto',padding:'2rem'}}>
          <div>
            <div className="modal_title text-start text-sm-center"><h2>MY portfolio logo</h2></div>
            <div className="modal-body">
              <div class="modal__details">
                <div class="row open-sans-font">
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-file-earmark-text pe-2"></i>Project: <span class="ft-wt-600 uppercase">Logo</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-person pe-2"></i>Client : <span class="ft-wt-600 uppercase">Pesonal website</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-code-slash pe-2"></i>Language : <span class="ft-wt-600 uppercase">Not available</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-box-arrow-up-right pe-2"></i>Preview : <a class="preview-link" target="_blank" rel="noopener noreferrer nofollow" href="https://www.canva.com/design/DAGK0yrpmSo/uiO0IgI7abgHSY3xInp_YA/edit?utm_content=DAGK0yrpmSo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">www.canva.com</a></div>
                </div>
              </div>
              <figure class="modal__img">
                <img alt="portfolio project demo" src='/assets/images/title logo (2).png' width="895" height="552" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModal5" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable d-flex flex-column align-items-center justify-content-center">
        <div className='text-end' style={{width:"100%"}}>
          <i className='bi bi-x-circle fs-4 close mb-1' data-bs-dismiss="modal" aria-label="Close"></i>
        </div>
        <div className="modal-content" style={{border:'2px solid #222',borderRadius:"10px",backgroundColor:'#252525', overflow:'auto',padding:'2rem'}}>
          <div>
            <div className="modal_title text-start text-sm-center"><h2>mockup project</h2></div>
            <div className="modal-body">
              <div class="modal__details">
                <div class="row open-sans-font">
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-file-earmark-text pe-2"></i>Project: <span class="ft-wt-600 uppercase">Website</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-person pe-2"></i>Client : <span class="ft-wt-600 uppercase">Jythu</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-code-slash pe-2"></i>Language : <span class="ft-wt-600 uppercase">HTML, CSS, Javascript, React js</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-box-arrow-up-right pe-2"></i>Preview : <a class="preview-link" target="_blank" rel="noopener noreferrer nofollow" href="https://assignment-lyart-psi.vercel.app/">www.jythu.com</a></div>
                </div>
              </div>
              <figure class="modal__img">
                <img alt="portfolio project demo" src='/assets/images/jyuth.png' width="895" height="552" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModal6" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable d-flex flex-column align-items-center justify-content-center">
        <div className='text-end' style={{width:"100%"}}>
          <i className='bi bi-x-circle fs-4 close mb-1' data-bs-dismiss="modal" aria-label="Close"></i>
        </div>
        <div className="modal-content" style={{border:'2px solid #222',borderRadius:"10px",backgroundColor:'#252525', overflow:'auto',padding:'2rem'}}>
          <div>
            <div className="modal_title text-start text-sm-center"><h2>facebook reels project</h2></div>
            <div className="modal-body">
              <div class="modal__details">
                <div class="row open-sans-font">
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-file-earmark-text pe-2"></i>Project: <span class="ft-wt-600 uppercase">Reels making</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-person pe-2"></i>Client : <span class="ft-wt-600 uppercase">I Grow plus plus</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-code-slash pe-2"></i>Language : <span class="ft-wt-600 uppercase">Not available</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-box-arrow-up-right pe-2"></i>Preview : <a class="preview-link" target="_blank" rel="noopener noreferrer nofollow" href="https://www.canva.com/design/DAGL-Y46_w8/BnWeO8tEDdjHDoEL2jQi0g/edit?utm_content=DAGL-Y46_w8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">www.canva.com</a></div>
                </div>
              </div>
              <figure class="modal__img">
                <img alt="portfolio project demo" src='/assets/images/facebook-reels-2.png' width="895" height="552" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModal7" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable d-flex flex-column align-items-center justify-content-center">
        <div className='text-end' style={{width:"100%"}}>
          <i className='bi bi-x-circle fs-4 close mb-1' data-bs-dismiss="modal" aria-label="Close"></i>
        </div>
        <div className="modal-content" style={{border:'2px solid #222',borderRadius:"10px",backgroundColor:'#252525', overflow:'auto',padding:'2rem'}}>
          <div>
            <div className="modal_title text-start text-sm-center"><h2>VIM CORN LOGO</h2></div>
            <div className="modal-body">
              <div class="modal__details">
                <div class="row open-sans-font">
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-file-earmark-text pe-2"></i>Project: <span class="ft-wt-600 uppercase">Logo</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-person pe-2"></i>Client: <span class="ft-wt-600 uppercase">Personal Site</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-code-slash pe-2"></i>Language: <span class="ft-wt-600 uppercase">Not available</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-box-arrow-up-right pe-2"></i>Preview: <a class="preview-link" target="_blank" rel="noopener noreferrer nofollow" href="https://www.canva.com/design/DAFqFH_O5Yo/qzvZZEz4KQJHJOHnh5OVWw/edit?utm_content=DAFqFH_O5Yo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">www.canva.com</a></div>
                </div>
              </div>
              <figure class="modal__img">
                <img alt="portfolio project demo" src='/assets/images/VIM (2).png' width="895" height="552" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModal8" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable d-flex flex-column align-items-center justify-content-center">
        <div className='text-end' style={{width:"100%"}}>
          <i className='bi bi-x-circle fs-4 close mb-1' data-bs-dismiss="modal" aria-label="Close"></i>
        </div>
        <div className="modal-content" style={{border:'2px solid #222',borderRadius:"10px",backgroundColor:'#252525', overflow:'auto',padding:'2rem'}}>
          <div>
            <div className="modal_title text-start text-sm-center"><h2>I GROW++ project</h2></div>
            <div className="modal-body">
              <div class="modal__details">
                <div class="row open-sans-font">
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-file-earmark-text pe-2"></i>Project: <span class="ft-wt-600 uppercase">Website</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-person pe-2"></i>Client : <span class="ft-wt-600 uppercase">I Grow plus plus</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-code-slash pe-2"></i>Language : <span class="ft-wt-600 uppercase">HTML, CSS, Javascript, PHP</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-box-arrow-up-right pe-2"></i>Preview : <a class="preview-link" target="_blank" rel="noopener noreferrer nofollow" href="https://www.igrowplusplus.com/pcmb.php">www.igrowplusplus.com</a></div>
                </div>
              </div>
              <figure class="modal__img">
                <img alt="portfolio project demo" src='/assets/images/igrow++.png' width="895" height="552" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModal9" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable d-flex flex-column align-items-center justify-content-center">
        <div className='text-end' style={{width:"100%"}}>
          <i className='bi bi-x-circle fs-4 close mb-1' data-bs-dismiss="modal" aria-label="Close"></i>
        </div>
        <div className="modal-content" style={{border:'2px solid #222',borderRadius:"10px",backgroundColor:'#252525', overflow:'auto',padding:'2rem'}}>
          <div>
            <div className="modal_title text-start text-sm-center"><h2>I Grow++ Poster</h2></div>
            <div className="modal-body">
              <div class="modal__details">
                <div class="row open-sans-font">
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-file-earmark-text pe-2"></i>Project: <span class="ft-wt-600 uppercase">Sales Poster</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-person pe-2"></i>Client : <span class="ft-wt-600 uppercase">I Grow plus plus</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-code-slash pe-2"></i>Language : <span class="ft-wt-600 uppercase"> Not available</span></div>
                  <div class="col-12 col-sm-6 mb-2"><i class="bi bi-box-arrow-up-right pe-2"></i>Preview : <a class="preview-link" target="_blank" rel="noopener noreferrer nofollow" href="https://www.canva.com/design/DAGLrt6cmQc/qogCGGDmvMkJrQXM5zJvTQ/edit?utm_content=DAGLrt6cmQc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">www.canva.com</a></div>
                </div>
              </div>
              <figure class="modal__img">
                <img alt="portfolio project demo" src='/assets/images/igrow++poster.png' width="895" height="552" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
