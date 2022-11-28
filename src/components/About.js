import React from 'react'
import img from '../assets/ban1.jpeg'
import './Home.css'
const About = () => {
  return (
    <div  classNameName='conatiner'>
   <div classNameName='banner'>
    <img src={img} alt="banner"  style={{"width":"80rem" ,"height":"33rem" }}/>
    
   </div>
   <form className="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin">
<h2 className="w3-center">Contact Us</h2>
 
<div className="w3-row w3-section">
  <div className="w3-col" style={{"width":"50px"}}><i class="w3-xxlarge fa fa-user"></i></div>
    <div className="w3-rest">
      <input className="w3-input w3-border" name="first" type="text" placeholder="First Name"/>
    </div>
</div>

<div className="w3-row w3-section">
  <div className="w3-col" style={{"width":"50px"}}><i class="w3-xxlarge fa fa-user"></i></div>
    <div className="w3-rest">
      <input className="w3-input w3-border" name="last" type="text" placeholder="Last Name"/>
    </div>
</div>

<div className="w3-row w3-section">
  <div className="w3-col" style={{"width":"50px"}}><i class="w3-xxlarge fa fa-envelope-o"></i></div>
    <div className="w3-rest">
      <input className="w3-input w3-border" name="email" type="text" placeholder="Email"/>
    </div>
</div>

<div className="w3-row w3-section">
  <div className="w3-col" style={{"width":"50px"}}><i class="w3-xxlarge fa fa-phone"></i></div>
    <div className="w3-rest">
      <input className="w3-input w3-border" name="phone" type="text" placeholder="Phone"/>
    </div>
</div>

<div className="w3-row w3-section">
  <div className="w3-col" style={{"width":"50px"}}><i class="w3-xxlarge fa fa-pencil"></i></div>
    <div className="w3-rest">
      <input className="w3-input w3-border" name="message" type="text" placeholder="Message"/>
    </div>
</div>

<p className="w3-center">
<button className="w3-button w3-section w3-blue w3-ripple"> Send </button>
</p>
</form>

   
  </div>
    
  )
}

export default About