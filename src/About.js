import React, { useState } from 'react'
import HowToUse from './API/HowToUse'
import NutritionistsAPI from './API/NutritionistsAPI'

const About = () => {
    const [aboutData, setAboutData] = useState(HowToUse)
    const  [data, setData] = useState(NutritionistsAPI)

    return (
        <>

          <section className="common-section our-services our-services-left-side">
          <div className="container mb-5">
           <div className="row">
              <div className="col-12 col-lg-5 text-center our-services-left left-img" >
                  <img src="./img/img6.jpg" alt="" />
              </div>
              {/* first data */}
              <section className="col-12 col-lg-7 our-service-list" > 
              <h3 className="mini-title">
              -- GET ACCESS TO OUR GYM -- </h3>
              <h2>How to get access</h2>

           {aboutData.map((curElem) => {
               const {id,title,info} = curElem
               return (
                   <>
                    <div className="our-services-info row " key={id}>
                  <div className="col-1 our-service-number">{id}</div>
                  <div className="col-10 our-services-data">
                      <h3>{title}</h3>
                      <p className="main-hero-para">{info}</p>
                  </div>
              </div>
                   </>
                       
               )
           })}
         
             
              <br />
              <button className="btn-style btn-login border">Learn more</button>
              </section>
          </div>
           </div>

          </section>
          
          {/* second part of services */}


          <section className="common-section our-services our-services-right">
          <div className="container mb-5">
           <div className="row">
              
           
              <section className="col-12 col-lg-7 our-services-nutritionist align-items-start" > 
              <h3 className="mini-title"> 
              -- GET APPOINTMENT TO NUTRITIONISTS --</h3>
              <h2>weekly appointment</h2>

           {data.map((curElem) => {
               const {id,title,info} = curElem
               return (
                   <>
                    <div className="our-services-info row " key={id}>
                  <div className="col-1 our-service-number">{id}</div>
                  <div className="col-10 our-services-data">
                      <h3>{title}
</h3>
                      <p className="main-hero-para">{info}</p>
                  </div>
              </div>
                   </>
                       
               )
           })}
         
             
              <br />
              <button className="btn-style btn-login border">Learn more</button>
              </section>
              <div className="col-12 col-lg-5  our-services-left right-img" >
                  <img src="./img/img7.jpg" alt="" />
              </div>
          </div>
           </div>

          </section>


        </>
    )
}

export default About
