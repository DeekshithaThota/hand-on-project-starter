import React from 'react'
import "./dashboard.css"
// import { useNavigate } from "react-router-dom"
function container({text1,text2,img1}) {
  // let navigate = useNavigate();
  return (
    <div>
      <div className="container1">
          <div className="cont11">
           <div className='head'>
            <h1>{text1}</h1>

            <p>
             {text2}
            </p>
            </div>
            <div className="Ellipse86">
              <img src={img1} alt="ellipse86" />
            </div>
          </div>
        </div>
        {/* <div className="container2">
          <div className="cont21">
            <form>
            
             
              <img src={img2}></img>
              <p>{text3}</p>
              
              <div className="firstflex">
                
               
                <input
                  className="submit"
                  value={value}
                  // onClick={() => {
                  //   navigate("../pages/upload/Upload");
                  // }}
                > </input>
              </div>
            </form>
          </div>
        </div> */}
    </div>
    
  )
}

export default container
