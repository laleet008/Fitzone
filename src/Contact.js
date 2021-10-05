import React from 'react'
import { useState } from 'react/cjs/react.development'

const Contact = () => {
    const [userData, setUserData] = useState({
        firstName:"",
        lastName:"",
        phoneNumber:"",
        email:"",
        address:"",
        message:"",
    })
     let name,value
    const postUserData = (event)=>{
     name = event.target.name
     value =event.target.value
     setUserData({...userData, [name]:value})
    }

    //firebase
    const submitData = async(event) =>{
        event.preventDefault()
        const {
        firstName,
        lastName,
        phoneNumber,
        email,
        address,
        message
    } = userData
    if(firstName && lastName && phoneNumber &&  email && address && message){ 

      const res= await fetch('https://react-fitness-61f2b-default-rtdb.firebaseio.com/userDataRecord.json',
      {

       method:"POST",
      headers:{
          "Content-Type" : "application/json"
      },
      body:JSON.stringify({
            firstName,
        lastName,
        phoneNumber,
        email,
        address,
        message,

      })
    }
      )
      if(res){
          setUserData({
               firstName:"",
        lastName:"",
        phoneNumber:"",
        email:"",
        address:"",
        message:"",
          })
          alert('Data stored')
      }else{
          alert('fill the data')
      }
    }
    else{
          alert('fill the data')
    }
    }

    return (
        <>
        <section className="contact-us">
            <div className="container">
                <div className="row">
                    <div className="col-12  mx-auto">
                        <div className="row">
                        {/* left side */}
                            <div className="contact-left col-12 col-lg-5">
                              <h2>contact with <br /> our team </h2>  
                              <p className="main-hero-para">
                                  Be connected and stay in touch with our team by filling the form. Your privacy will be secured with us. </p>
                              <figure>
                                  <img src="./img/img9.jpg" alt="img" className="img-fluid contact-img" />
                              </figure>
                            </div>
                            {/* right side contact */}
                            <div className="contact-right col-12 col-lg-7">
                               <form method="POST">
                                   <div className="row">
                                    <div className="col-12 col-lg-6 contact-input-field">
                                        <input type="text" 
                                         placeholder="First Name"
                                         name="firstName"
                                        className="form-control" 
                                        value={userData.firstName}
                                        onChange={postUserData}
                                        />
                                    </div>
                                    <div className="col-12 col-lg-6 contact-input-field">
                                        <input type="text" 
                                         placeholder="Last Name"
                                          name="lastName"
                                         className="form-control" 
                                         value={userData.lastName}
                                         onChange={postUserData}
                                        />
                                    </div>
                                   </div>   
                                   {/* second line */}
                                   <div className="row">
                                    <div className="col-12 col-lg-6 contact-input-field">
                                        <input type="text"  placeholder="Phone Number"
                                        className="form-control" 
                                        name="phoneNumber"
                                         value={userData.phoneNumber}
                                        onChange={postUserData}
                                        />
                                    </div>
                                    <div className="col-12 col-lg-6 contact-input-field">
                                        <input type="text"  placeholder="Email"
                                        className="form-control" 
                                         name="email"
                                        value={userData.email}
                                        onChange={postUserData}
                                        />
                                    </div>
                                   </div> 
                                   {/* big input field */}
                                   <div className="row">
                                       <div className="col-12 contact-input-field">
                                           <input type="text" 
                                           className="form-control "
                                            name="address"
                                            placeholder="Your Address"
                                            value={userData.address}
                                            onChange={postUserData}     />
                                            
                                       </div>
                               </div>  
                                   <div className="row">
                                       <div className="col-12 contact-input-field">
                                           <input type="text" 
                                           className="form-control"
                                           name="message"
                                            placeholder="Enter your message "
                                             value={userData.message}
                                            onChange={postUserData} />
                                       </div>
  
                                  </div>  
                             <div class="form-check form-checkbox-style">
                                <input class="form-check-input" type="checkbox" value="userData.firstName" id="flexCheckChecked"  />
                                <label class="form-check-label" className="main-hero-para check-para" >
                                I agree with the terms and conditions this company has provided.
                                </label>
                                </div>
                                <button className="btn btn-style w-100" type="submit "  onClick={submitData}>Submit</button>
                               </form> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         
        </>
    )
}

export default Contact
