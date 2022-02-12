import React from 'react';
import ToggleButton from '@mui/material/ToggleButton'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import  TemporaryDrawe from '../../component/sideBar/SideBar'
 import './Navbar.css'
import img1 from '../../assets/logo.png'



function Navbar() {
  return (
    <div>
    <nav>
    <div className="display">
      <div><img className="logoImg" src={img1} alt="error"/></div>
      <ul className="bar">
        <li><a className="linkBar" href="">Cases</a></li>
        <li><a className="linkBar" href="">Services</a></li>
        <li><a className="linkBar" href="">About</a></li>
        <li><a className="linkBar" href="">Creears</a></li>
        <li><a className="linkBar" href="">Contact</a></li>

      </ul>
      <div className="icon">
      <ToggleButton value="center" aria-label="centered">
        <FormatAlignCenterIcon style={{color:"white"}}  /> <TemporaryDrawe  />
      </ToggleButton>
      </div>
      </div>
    </nav>
</div>);
  }
  export default Navbar;
  

