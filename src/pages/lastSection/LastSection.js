import { Grid } from '@mui/material';
import style from "./LastSection.module.css";
import map from '../../assets/New folder/map.gif'
import React from 'react';
var  firstName=5
console.log(secondName);
console.log(typeof(firstName));
var secondName=5
// secondName=secondName
console.log( typeof(secondName));
console.log(secondName+firstName);
export default function LastSection() {
  return (
    <div className={style.mainDiv}>
      <Grid container spacing={2}>
        <Grid item lg={5} md={5} sm={12} xs={12}>
        <div className={style.subDiv}>
          <h2 className={style.heading}>Contact</h2>
          {/* <div> */}
          <span className={style.heading1}>Head Office:</span>
          <p className={style.Adress}>717 K Street, STE 207 Sacramento, CA 95814, United State</p>
          {/* </div> */}
          <p className={style.num}>+1 916 822 7374</p>
         <span className={style.heading1}>Corporate Office:</span>
          <p className={style.Adress}>P681 Amin Town, Kashmir Bridge, Canal Road, Faisalabad, Pakistan</p>
          <p className={style.num}> 0309-1734246</p>
          <p className={style.link}>info@techloset.com</p>
          <div className={style.button}>Contact Us</div>
          </div>
        
   
        </Grid>
        <Grid item lg={7} md={7} sm={12} xs={12}>
        <div className={style.display}>
        <div>
        <div className={style.img}> <img src={map} className={style.img1}/></div>
          <p className={style.paragraph2}>Find us in the heart of Faisalabad</p>
          </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
