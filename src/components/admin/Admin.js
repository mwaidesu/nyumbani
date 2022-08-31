import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from './Sidebar'
import MainDash from './MainDash/MainDash'
import RightSide from './RigtSide/RightSide'
import './Admin.css'

function Admin() {
  return (
    <Router>
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
    </Router>
  )
}

export default Admin