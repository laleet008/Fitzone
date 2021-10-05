import React from 'react'

const Footer = () => {
    return (
        <>
      <footer>
        <div className=" footer-container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3 footer-section">
                  <h3>About</h3>
                  <p className="main-hero-para">
                    We are a team who provide services of value for money, our nutritionists are highly experienced and educated with more than 1200+ happy clients.
                  </p>
                </div>

                <div className="col-6 col-lg-3 footer-section">
                  <h3>Legal</h3>
                  <ul>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">privacy</a>
                    </li>
                  
                  </ul>
                </div>

                <div className="col-6 col-lg-3 footer-section">
                   <h3>Contact Us</h3>
                   <address>
                   <a href='/' className="footer-link main-hero-para">Fit Zone</a>
                    <p>
                    +1 577 433 222 <br />
                    fitzone@gmail.com <br />
                    Box 576, Kathmandu <br />
                    Bagmati,Nepal</p>
                   </address>

                 
                </div>

                <div className="col-6 col-lg-3 footer-section">
                  <h3>Follow Us</h3>
                  <div className="row">
                    <div className="col-3 mx-auto">
                    <a href="https://www.facebook.com/laleetpuree" target="_blank">

                      <i class="fab fa-facebook-f fontawesome-style-footer"></i>
                    </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/laleet_iam8/"
                        target="_blank">
                        <i class="fab fa-instagram fontawesome-style-footer"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                    <a href="https://www.linkedin.com/in/lalit-puri-b5aa33193/"  target="_blank">

                      <i class="fab fa-linkedin fontawesome-style-footer"></i>
                    </a>
                    </div>
                    <div className="col-3 mx-auto">
                    <a href="https://twitter.com/LalitPuri08" target="_blank">

                      <i class="fab fa-twitter fontawesome-style-footer"></i>
                    </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2021 Fit Zone. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
    )
}

export default Footer
