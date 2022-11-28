import React from 'react'
import img from '../assets/ban5.jpeg'
import './Home.css'
const Blog = () => {
  return (
    <div  className='conatiner'>
    <div className='banner'>
     <img src={img} alt="banner"  style={{"width":"80rem" ,"height":"33rem" }}/>
     <div   className="text"><h1>Happy JOURNEY</h1>
     <p>See the world. It's more fantastic than <br/>
        any dream made or paid for in factories</p>
        <button>book</button>
     </div>
    </div>
    
   </div>
  )
}

export default Blog