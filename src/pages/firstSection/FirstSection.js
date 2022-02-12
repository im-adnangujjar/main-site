import { Grid } from '@mui/material';
import React from 'react';
import imgs from '../../assets/mobile-icon.png'
import img1 from '../../assets/led-icon.png'
import img2 from '../../assets/ai-icon.png'
import img3 from '../../assets/blockchain-icon.png'
import img4 from '../../assets/saas-icon.png'
import img5 from '../../assets/dev-ops-icon.png'

import Card from '../../component/card/Card';
import './FirstSection.css'

function FirstSection() {
    return (

        <div className='mainContainer'>
            <h1 className="heading">SERVICES</h1>
            <p className="paragraph">
                TechloSet Solutions aspires to enhance the productivity and growth of your business by providing 'Smart Solutions' and 'Digitally Transforming' your business processes. Using latest state-of-the-art Technologies, we're providing the following services to bring life in your product.
            </p>
            <div>
                <Grid container spacing={2}>
                   <Grid item lg={4} md={4} sm={6} xs={12}><Card img= {imgs} text="Mobile App Development"text1="Adroid & iOS Apps" /></Grid>
                   <Grid item lg={4} md={4} sm={6} xs={12}><Card img={img1} text="Web App Development" text1="Full Stack Development with cross browser compatibility"/></Grid>
                   <Grid item lg={4} md={4} sm={6} xs={12}><Card img={img2} text="Al Based Solutions" text1="Artificial Intelligence based Model training and integration with Web & Mobile Apps"/></Grid>
                   <Grid item lg={4} md={4} sm={6} xs={12}><Card img={img3} text="Blockchain Based Solutions" text1="Daps & Smart Contract Developmen"/></Grid>
                   <Grid item lg={4} md={4} sm={6} xs={12}><Card img={img4} text="Saas Products" text1="Saas Services & Product Development"/></Grid>
                   <Grid item lg={4} md={4} sm={6} xs={12}><Card img={img5} text="DavOps Product" text1="Developer opration & process Automation"/></Grid>
                </Grid>
                </div>
               

        </div>
    );
}
export default FirstSection
