import React from 'react';
import styles from './ThiredSection.module.css'
import logoimg1 from '../../assets/upwork.png'
import logoimg2 from '../../assets/firms.png'
import logoimg3 from '../../assets/clutch.png'
import logoimg4 from '../../assets/appFutura.png'
import logoimg5 from '../../assets/topCompany.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function ThiredSection() {
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
        <div className={styles.mainDiv}>
            <p className={styles.paragraph1}>SOFTWARE INNOVATION AWARDS</p>
            <div className={styles.dis}>
                <p className={styles.paragraph2}>We've came a long way since our launch in 2015. TechloSet Solutions has made their mark among the top software development companies and our existence is validated by some renowned firms. We proudly present the associations and achievements we have made in the past few years.</p>
            </div>


 <Carousel responsive={responsive}>
 
  <div><img  style={{width:"270px"}}src={logoimg1}/></div>
  <div><img  style={{width:"270px"}}src={logoimg2}/></div>
  <div><img  style={{width:"270px"}}src={logoimg3}/></div>
  <div><img  style={{width:"270px"}}src={logoimg4}/></div>
  <div><img  style={{width:"270px"}}src={logoimg5}/></div>
  
</Carousel>

        
        </div>
    );
}
export default ThiredSection