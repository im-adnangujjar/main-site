import React from 'react';
import style from './FifthSection.module.css'
import Unohr from '../../assets/Unohr.png'
import Nhaspa from '../../assets/Nha-spa.png'
import steps from '../../assets/89steps.png'
import grocer from '../../assets/go-grocer.png'
import Flip from '../../assets/FlipFlip_logoSite_SVG.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { display } from '@mui/system';
function FifthSection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <div className={style.mainDiv}>
    <div className={style.subDiv}>
      <h2 className={style.heading1}>CLIENTS AND PARTNERS</h2>
      <p className={style.paragraph1}>
        TechloSet Solutions has served several innovative startups and smart business owners like you. With 100% client satisfaction rate, TechloSet has always maintained the best relation with our partners. We would like to present some of our Clients and Partners.</p>
        <Carousel responsive={responsive}>
        
          <div><img src={Unohr} style={{ width: "180px" }} /></div>
          <div><img src={Nhaspa} style={{ width: "180px"}} /></div>
          <div><img src={steps} style={{ width: "180px" }} /></div>
          <div><img src={grocer} style={{ width: "180px"}} /></div>
          <div><img src={Flip} style={{ width: "180px" }} /></div>
        </Carousel>;
    </div>
    </div>
  );
}
export default FifthSection