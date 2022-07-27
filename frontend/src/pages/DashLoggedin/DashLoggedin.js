import '../loggedin/loggedin.css'
import React from 'react'
import img from '../loggedin/img1.svg'
import Card from '@material-ui/core/Card'
import  CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
const DashLoggedin = () =>{
return(
    <div>
        <h1>Your uploaded APIs</h1>
        <div className='apiflex'>
            <Card style={{width:300,
            }}>
            <CardContent>
               <Typography> 
            <img src={img} alt='...'/>











            
          <h4>BACKGROUND REMOVER</h4>
          <p>Using this API you can remove the background of your image</p>
          </Typography>
          </CardContent>
            </Card>
            <Card style={{width:300,
            }}>
            <CardContent>
               <Typography> 
            <img src={img} alt='...'/>
          <h4>BACKGROUND REMOVER</h4>
          <p>Using this API you can remove the background of your image</p>
          </Typography>
          </CardContent>
            </Card>
            <Card style={{width:300,
            }}>
            <CardContent>
               <Typography> 
            <img src={img} alt='...'/>
          <h4>BACKGROUND REMOVER</h4>
          <p>Using this API you can remove the background of your image</p>
          </Typography >
          </CardContent>
            </Card>
            <Card style={{width:300,
            }}>
            <CardContent>
               <Typography> 
            <img src={img} alt='...'/>
          <h4>BACKGROUND REMOVER</h4>
          <p>Using this API you can remove the background of your image</p>
          </Typography>
          </CardContent>
            </Card>
        </div>
    </div>
)
}
export default DashLoggedin