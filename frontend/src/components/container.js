import React from 'react'
import "./pages/dashboard/dashboard.css"
function container({text1,text2,ppic}) {
  return (
    <div>
      <div className="container1">
          <div className="cont11">
           
            <h1>{text1}</h1>

            <p>
             {text2}
            </p>
            <div className="Ellipse86">
              <img src={ppic} alt="ellipse86" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default container
