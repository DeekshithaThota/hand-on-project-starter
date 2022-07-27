import React from 'react'
//import Dashboard from "./pages/dashboard/Dashboard"
import logo from './logo.svg';
import './App.css';
//import Upload from './pages/upload/Upload'
import Loggedin from './pages/loggedin/Loggedin'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import DashLoggedin from './pages/DashLoggedin/DashLoggedin';

function App() {
  return (


    <Router>
      <nav>
        <img src={logo} className='logo' />
      </nav>
     
      <Routes>
        {/* <Route path="/" element={<Dashboard/>} /> */}
        <Route path="/" element={<DashLoggedin/>} />
        <Route path="pages/upload/Upload" element={<Loggedin/>} />

      </Routes>
    </Router>

  )
}

export default App
