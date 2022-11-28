import React from 'react'
import img from '../assets/banner7.jpeg'
import img2 from '../assets/img1.jpeg'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img4.jpeg'
import './Home.css'
import img1 from '../assets/img7.jpeg'
const Home = () => {
  
  
 
  
  return (
 <div  className='conatiner'>
   <div className='banner'>
    <img src={img} alt="banner"  style={{"width":"85rem" ,"height":"33rem" }}/>
    <div   className="text"><h1>Happy JOURNEY</h1>
    <p>See the world. It's more fantastic than <br/>
       any dream made or paid for in factories</p>
       <button>book</button>
    </div>
   </div>
   {/* <div className='body'>
   <Box>
      <Paper elevation={6} />
      <img src={img1} alt= 'img1'/>
      </Box>
   </div> */}
   <div id="about" class="w3-padding-top-64">
<div class="w3-row">

<div class="w3-half w3-padding-large w3-hide-small">
<img src={img1} class="w3-round w3-image w3-opacity-min" alt="Table" style={{"width":"100%"}}/>
</div>

<div className="w3-half w3-padding-large">
<h1 className="w3-center">THE DESTINATION!</h1><br/>
<h5 className="w3-center">Tradition since 1889</h5>
<p class="w3-large">
The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<p className="w3-large w3-text-grey w3-hide-medium">
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.</p>
</div>
</div>
</div>
<div class="w3-container w3-padding-32 w3-theme-d1">
  <h1>Places to Visit</h1>
</div>

<div class="w3-row-padding w3-themes">

<div class="w3-third w3-section">
<div class="w3-card-4">
<img src={img2} alt="banner" style={{"width":"100%"}}/>
<div class="w3-container w3-white">
<h4>BALI</h4>
<p>Monterosso al Mare is located at the center of a small natural gulf, protected by a small artificial reef,
in the Riviera of La Spezia. It is the northernmost village of the Cinque Terre.</p>
</div>
</div>
</div>

<div class="w3-third w3-section">
<div class="w3-card-4">
<img src={img3} alt="banner" style={{"width":"100%"}}/>
<div class="w3-container w3-white">
<h4>GOA</h4>
<p>Monterosso al Mare is located at the center of a small natural gulf, protected by a small artificial reef,
in the Riviera of La Spezia. It is the northernmost village of the Cinque Terre.</p>
</div>
</div>
</div>

<div class="w3-third w3-section">
<div class="w3-card-4">
<img src={img4} alt="banner" style={{"width":"100%"}}/>
<div class="w3-container w3-white">
<h4>MANALI</h4>
<p>Vernazza is another of the five towns in the region. Vernazza is the fourth town heading north. It has no car traffic, and is one of the truest
"fishing villages" on the Italian Riviera.</p>
</div>
</div>
<br/><br/><br/>
</div>
</div>


  </div>

  )
}

export default Home