import React from 'react'
import Container from './container'
import img1 from './img1.svg'
// import img2 from './Ellipse 126.png'
function Upload() {
  return (
    <div>
     <Container
     text1='Remove Image Background'
     text2='100% automatic and free'
     img1={img1}
    //  img2={img2}
    //  text3='file should be png/jpg and less than 5mb'
    //  value="Upload Image"
     />
    </div>
  )
}

export default Upload
