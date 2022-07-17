import React from 'react'
import { Navbar } from 'react-bootstrap'
import image from '../assets/elp.png'
const Start = () => {
  return (      
   <div>
   <img class="elp" src={image}/>
   <div className='d-flex align-items-center  justify-content-center position-relative' style={{marginTop:'140px'}} >
  <div style={{textAlign:'center'}}>
  <h2 style={{color:'#ffff'}} >Basic steps</h2>
  <p style={{color:'#99A1A6',position:'relative'}}>Please follow this steps It will help you fall a sleep quickly</p>
  </div>

 </div>
 
 <div>
 <div className='d-relative d-lg-flex mt-5  w-100 align-items-center ' style={{textAlign:'center',justifyContent:'center',gap:'6rem'}}>
   <div style={{positon:'relative'}}>
   <h2 style={{color:'#fff',position:'relative'}}>1</h2>
   <p style={{color:'#99A1A6',position:'relative'}}>Close any source of light in your room</p>
   </div>
   <div style={{positon:'relative'}}>
   <h2 style={{color:'#fff'}}>2</h2>
   <p style={{color:'#99A1A6',position:'relative'}}> Trun the air conditioner on or any cold air source and cover well</p>
   </div>
   <div style={{positon:'relative'}}>
   <h2 style={{color:'#fff'}}>3</h2>
   <p style={{color:'#99A1A6'}}>Lower the temperature</p>

   </div>
   
 </div>
<div className="d-flex align-items-center mt-4  justify-content-center">
<a id="btn_Download"  class="au" href='/all'>
<button class="btn btn_download"  style={{borderRadius:'50px ' ,border:'2px solid #0091F7',background:'none',color:'#fff',position:'relative'}}>All done</button>
</a>
</div>
 </div>
   </div>
  )
}

export default Start