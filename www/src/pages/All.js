import React from 'react'
import image from '../assets/elp.png'

const All = () => {
  return (
    <div style={{marginTop:'140px'}}>
    <img class="elp" src={image}/>
    <div className=' px-lg-5 px-5 d-flex align-items-center justify-content-center' > 
    <div className=' ' style={{position:'relative'}}>
       <div className='d-flex'   style={{border: "1.5px solid #99A1A6",borderRadius:'20px',padding: '1.3rem 1.5rem ',width:'400px'}}>
       <h2 style={{color:'#fff',textAlign:'center'}}>Sounds </h2>
       </div>
       <div className='d-flex justify-content-between mt-3 px-3'>


       </div>
    </div> 
    </div>
    <div className=' px-lg-5 px-5 d-flex align-items-center justify-content-center' > 
    <div className=' ' style={{position:'relative'}}>
       <div className='d-flex'   style={{border: "1.5px solid #99A1A6",borderRadius:'20px',padding: '1.3rem 1.5rem ',width:'400px'}}>
       <h2 style={{color:'#fff',textAlign:'center'}}>Boring videos </h2>
       </div>
       <div className='d-flex justify-content-between mt-3 px-3'>


       </div>
    </div> 
    </div>
    <div className=' px-lg-5 px-5 d-flex align-items-center justify-content-center' > 
    <div className=' ' style={{position:'relative'}}>
       <div className='d-flex'   style={{border: "1.5px solid #99A1A6",borderRadius:'20px',padding: '1.3rem 1.5rem ',width:'400px'}}>
       <h2 style={{color:'#fff',textAlign:'center'}}>Bedtime story </h2>
       </div>
       <div className='d-flex justify-content-between mt-3 px-3'>


       </div>
    </div> 
    </div>
    <div className=' px-lg-5 px-5 d-flex align-items-center justify-content-center' > 
    <div className=' ' style={{position:'relative'}}>
       <div className='d-flex'   style={{border: "1.5px solid #99A1A6",borderRadius:'20px',padding: '1.3rem 1.5rem ',width:'400px'}}>
       <h2 style={{color:'#fff',textAlign:'center'}}>Boring games </h2>
       </div>
       <div className='d-flex justify-content-between mt-3 px-3'>


       </div>
    </div> 
    </div>
    </div>
  )
}

export default All