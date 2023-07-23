import React from 'react'
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import FinalTimer from './timer_parts/FinalTimer';
import FinalCalender from './FinalCalender';
import {NavbarContainer, NavbarLink, NavbarLinkContainer} from './NavBarStyle';


function FinalCalenderRoutes() { 

    const [color, changeColor] = useState("#FFFFFF");
    document.body.style.backgroundColor = color

    return ( 
        <div>       
      <div style={{background: color}}>
        <NavbarContainer>
            <NavbarLinkContainer>
            <nav>
              {/* Colour of page will change accordingly as user navigate the different routes */}
                <NavbarLink to="/" onClick={() => changeColor("#FFFFFF")}>Home  </NavbarLink>
                <NavbarLink to="/finaltimer" onClick={() => changeColor("#07173f")}>Timer</NavbarLink>
            </nav>
            </NavbarLinkContainer>
        </NavbarContainer>

        <Routes>
            <Route path="/" element={<FinalCalender />}/>
            <Route path="/finaltimer" element={<FinalTimer />}/>
        </Routes>
      </div>
    
             
        </div>
    );
}

export default FinalCalenderRoutes