import { Grid } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import style from './SeventhSection.module.css'
import React from 'react';

function SeventhSection() {
    return (

        <div className={style.mainDiv}>
            <div className={style.subDiv}>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <h1 className={style.heading}>PROCESS</h1>
                        <div className={style.paragrpadding}>
                            <p className={style.paragraph1}>We believe that process matters the most to deliver the best outcome. At TechloSet Solutions we emphasize the most on following process.</p>
                            <p className={style.paragraph1}>Our Software development process is flexible, modern, and Agile. We encourage constant feedback from client and flexible to follow Just-in-time development.</p>


                            <p className={style.paragraph1}>With the blend of highly Qualified Engineers, Deliberating Analysts, Imaginative Designers and Attentive QA Team. Our team is ready to serve you at each step of your product development. Not only that, we guarantee our constant support & improvement for a lifetime.
                                DevelopmentSupport & ImprovementMarketing</p>
                        </div>
                    </Grid>
                    <Grid item lg={6}>
                        
                             <div> 
                                <div className={style.displ}>
                                    <div className={style.iconbg}><ArrowRightAltIcon style={{width:"50px",height:'50px' }}/></div>
                                    <h2 className={style.heading1}>Development</h2>  
                                    </div>        
                                <p className={style.paragraph4}> We have the best team in town, don't worry about that!</p>
                                
                            
                        <div>
                        <div className={style.displ}>
                            <div className={style.iconbg}><ArrowRightAltIcon style={{width:"50px",height:'50px' }}/></div>
                                <h3 className={style.heading1}>Support & Improvement</h3>
                                </div>
                                <p className={style.paragraph4}>From a startup to an enterprise, we are ready to serve each type of customer 24/7</p>
                            </div>
                            <div className={style.displ}>
                            <div className={style.iconbg}><ArrowRightAltIcon style={{width:"50px",height:'50px' }}/></div>
                                <h3 className={style.heading1}>Marketing</h3>
                                </div>
                                <p className={style.paragraph4}>Our digital marketing experts are always ready to put the best approach on the table for companies by using latest marketing tools and getting statistics of what is going around.</p>
                                <div  className={style.displ}>
                                <div className={style.iconbg}><ArrowRightAltIcon style={{width:"50px",height:'50px' }}/></div>
                                <h3 className={style.heading1}>Strategy</h3>
                                </div>
                                <p className={style.paragraph4}>TechloSet takes the research seriously to put across a strategy. With all pros and cons stated by side, we can interpret the changing digital era.</p>
                            
                            <div className={style.displ}>
                            <div className={style.iconbg}><ArrowRightAltIcon style={{width:"50px",height:'50px' }}/></div>
                            <h3 className={style.heading1}>Design</h3>
                            </div>
                            <p className={style.paragraph4}>From creating imaginative prototypes to pixel-perfect UI interface, we are capable of delivering the most catchy design.</p>
                            
                        </div>
                    </Grid>
                </Grid>
            </div>

        </div>
    );
}
export default SeventhSection


