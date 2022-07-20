import React from 'react'
import image from '../assets/images/profilepic.jpg'
import imagex from '../assets/elp.png'

const Info = () => {
  return (
     <div>
     <img style={{position:'fixed',bottom:'0',marginBottom:'50px', pointerEvents: "none"}}src={imagex}/>

     <div className='w-100 py-3 px-lg-5 px-3'>
     <div className='d-flex justify-content-between'>
     <div className='d-flex align-items-center gap-3'>
       <img src={image} style={{height:'90px',width:'90px',borderRadius:'70px',objectFit:'cover',position:'relative'}}/>
       <h2 style={{color:'#fff',position:'relative'}}>Eyad Gomaa</h2>
      </div>
       <h2 className='d-flex align-items-center' style={{color:'#fff',}}>4 Last try</h2>
      
     </div>
     </div>
     </div>
  )
}

export default Info