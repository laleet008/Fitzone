import React from 'react'
import { useState } from 'react/cjs/react.development'
import ServicesAPI from './API/ServicesAPI'

const Services = () => {
    const [services, getServices] = useState(ServicesAPI)
     return (
        <>
        <section className="service-main-container">
            <div className="container service-container">
            <h2 className="main-heading text-center">get services</h2>
            <div className="row our-services-list">

              {services.map((curElem)=>{
                  const {id,logo,title,info} = curElem
                  return (


                <div className="col-11 col-lg-4 col-xxl-4 work-container-div" key={id}>
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h3 className="sub-heading">{title}</h3>
                    <p className="main-hero-para">{info}</p>
                </div>
                  )
              })}

            </div>
            </div>
        </section>
            
        </>
    )
}

export default Services
