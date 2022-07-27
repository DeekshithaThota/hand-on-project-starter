import React from "react";
//import { Header } from "./components/Header";
import "./dashboard.css";
import profilepic from "./profilepic.svg";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();
  return (
    
      <div className="db">
        <div className="container1">
          <div className="cont11">
            <div className="Ellipse86">
              <img src={profilepic} alt="ellipse86" />
            </div>
            <h1>Welcome to your Dashboard</h1>

            <p>
              Your uploaded APIs will be displayed here once you login to your
              account.
            </p>
          </div>
        </div>
        <div className="container2">
          <div className="cont21">
            <form>
              <h2>Login to your account</h2>
              <div className="firstflex">
                <input type="text" placeholder="Emailaddress"></input>
                <br />
                <input type="password" placeholder="password"></input>
                <br />
                <input
                  type="submit"
                  value="login/signin"
                  className="submit"
                  onClick={() => {
                    navigate("../pages/upload/Upload");
                  }}
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    
  )
}

export default Dashboard;
