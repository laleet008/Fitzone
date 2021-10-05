import React,{useState} from 'react'
import start from './API/start'

const GetStarted = () => {
     
    const [startData,setStartData] = useState(start)
    

    return (
        <>
         <section>
             <div className="work-container container">
                 <h2 className="main-heading text-center">get started</h2>
                 <div className="row">
                  {start.map((cureElem)=>{
                      const {id, logo, title, info}  = cureElem
                    return (
                        <> 
                     <div className="col-12 col-lg-4 text-center work-container-div">
                       <i class={`fontawesome-style ${logo}`}></i>
                       <h3 className="sub-heading">{title}</h3>
                       <p className="main-hero-para">
                          {info}
                       </p>
                     </div>
                        </>
                    )
                  })}
                 </div>
             </div>
         </section>
     
        </>
    )
}

export default GetStarted
