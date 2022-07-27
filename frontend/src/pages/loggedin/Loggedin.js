import React from 'react'
import './loggedin.css'
 import img from './img1.svg'
// import figma from './figma1.png'
const Loggedin = () => {
  return (
    <div className='loggedin'>
      <div className='nav'>
      <a href=''> My APIs </a>
      <a href=''> My Account</a>
        <button>+Add API</button>
        </div>
      <div className='header'>
       
          <div className='block'> 
          <div><img src={img} alt='...'/></div>
          </div>
       <div className='head'> <h1>BACKGROUND REMOVER</h1>
        <p>100% automatic and free</p>
        </div>
        <div className='button'>
          
         <a href=''><button>View App</button></a> 
          </div>
    </div>
    <div className='APIs'>
      <h3>ALL APIs</h3>
      <div className='apiflex'>
       
        <div className='container'> <div className='card'>
          <img src={img} alt='...' className='image'/>
          <div className='content'>
          <h4>BACKGROUND REMOVER</h4>
          <p>Using this API you can remove the background of your image
          Using this API you can remove the background of your image
          Using this API you can remove the background of your image
          Using this API you can remove the background of your image
          </p>
          Using this API you can remove the background of your image
          
          </div>
          </div></div>
        <div className='container'> <div className='card'>
          <img src={img} alt='...' className='image'/>
          <div className='content'>
          <h4>BACKGROUND REMOVER</h4>
          <p>Using this API you can remove the background of your image</p>
          </div>
          </div></div>
        <div className='container'> <div className='card'>
          <img src={img} alt='...' className='image'/>
          <div className='content'>
          <h4>BACKGROUND REMOVER</h4>
          <p>Using this API you can remove the background of your image</p>
          </div>
          </div></div>
        <div className='container'> <div className='card'>
          <img src={img} alt='...' className='image'/>
          <div className='content'>
          <h4>BACKGROUND REMOVER</h4>
          <p>Using this API you can remove the background of your image</p>
          </div>
          </div></div>
        </div>
    </div>
    </div>
  )
}

export default Loggedin
