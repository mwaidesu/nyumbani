import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
} from "@iconscout/react-unicons";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  // console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        {/* <img src={Logo} alt="logo" /> */}
        <span>
          <span>N</span>yumbani
        </span>
      </div>

      <div className="menu">
         
                <NavLink className="menuItem" activeClassName="menuItem active" to='/orders'>
                <UilEstate/>
                <span>Dashboard</span>
                </NavLink>
           
              <NavLink className="menuItem" activeClassName="menuItem active" to='/movers'>
                <UilClipboardAlt/>
                <span>Movers</span>
                </NavLink>
           
           
              <NavLink className="menuItem" activeClassName="menuItem active" to='/clients'>
                <UilUsersAlt/>
                <span>Customers</span>
                </NavLink>
          
                
   
        {/* signoutIcon */}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
