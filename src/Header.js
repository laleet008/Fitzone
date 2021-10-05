import React from 'react'

const Header = () => {
    return (
        <>
          <header>
            <section className="container main-hero-container">
                <div className="row">
                    <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center d-flex flex-column align-item-start order-lg-first order-last">
                        <h3 className="display-2">Stay fit <br />at fit zone</h3>
                        <p className="main-hero-para">You are happily welcome to Fit Zone. Fit Zone has <span className="client">1200+  </span> happy clients who are happy with their shape of their body or health, in our different branches all over Nepal. Explore !!</p>
                      <h3 className="early-access">get early access</h3>
                      <div className="input-group mt-3">
                         <input type="text" className="rounded-pill w-75 me-3 p-2 form-control-text" placeholder="Enter Your Email" /> 
                         <div className="input-group-button">Get it now</div>
                      </div>
                    </div>
                    {/* main header */}
                    <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-item-center main-hero-images order-md-first order-sm-first ">
                        <img src="./img/img2.jpg" alt="img" className="img-fluid" />

                        <img src="./img/img5.jpg" alt="img" className="img-fluid main-hero-img2" />
                    </div>
                </div>
            </section> 
          </header>
        </>
    )
}

export default Header
