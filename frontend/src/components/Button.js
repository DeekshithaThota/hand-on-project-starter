import React from 'react'

const Button = () => {
    const onClick = (e) => {
        console.log(e);
    }  
    return (
    <button onClick={onClick} className='btn'>Login/Signup</button>
  )
}

export default Button
