import { cardActionAreaClasses, Grid } from '@mui/material';
import React from 'react';
import style from './SecondSection.module.css'
import gifImage from '../../assets/gifImage.gif'
function SecondSection() {
  return (
    <div className={style.mainDiv}>
    <div className={style.subDiv}>
      <Grid container spacing={2}>
        <Grid item md={7} sm={12} xs={12}>
        <img className={style.imge1} src={gifImage} alt="error"/>

        </Grid>
        <Grid item md={5} sm={12} xs={12}>
        <div className={style.display1}>
        <div>
          <p className={style.paragraph3}>Build. Launch. Grow</p>.
          <p className={style.paragraph4}>Lead by our expertise.</p>
          </div>
          <p className={style.paragraph5}>Do you have an tech-smart idea in your head? Lets give it life together. Following the "Your Idea, Our Solution Agenda"; We'd love to develop your product from scratch. We are capable to serve all niches, and companies of all sizes, from enterprises to small startups. We'd help to achieve your dreams and grow.</p>
          <div className={style.button}>Get Estimate</div>
          </div>
          
          </Grid>
      </Grid>
      </div>
    </div>
  );
}

export default SecondSection