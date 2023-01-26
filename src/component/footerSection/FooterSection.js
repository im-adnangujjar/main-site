import { Grid } from '@mui/material';
import React from 'react';
import style from './FooterSection.module.css'
// import GitHubIcon from '@mui/icons-material/GitHub';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

// import style from '../../assets/'

function FooterSection() {
    return (
        <div className={style.mainDiv}>
            <div className={style.mainContainer}>
                <Grid container spacing={2}>
                    <Grid item lg={4} md={4} sm={12}>
                        <div>
                            <h2 className={style.heading1}>Address</h2>
                            <h1 className={style.heading}>Head Office:</h1>
                            <p className={style.paragraph1}>717 K Street, STE 207 Sacramento, CA 95814, United State</p>
                            <p className={style.paragraph2}>+1 916 822 7374</p>
                            <h2 className={style.heading4}>Corporate Office:</h2>
                            <p className={style.paragraph1}>P681 Amin Town, Kashmir Bridge, Canal Road, Faisalabad, Pakistan</p>
                            <p className={style.paragraph2}>0309-1734246</p>
                        </div>
                        <div>
                            <h1 className={style.heading3}>
                                Follow us
                            </h1>

                            <div className={style.disp}>
                                <div className={style.iconsbg}><GitHubIcon className={style.icons} /></div>
                                <div className={style.iconsbg}><InstagramIcon className={style.icons} /></div>
                                <div className={style.iconsbg}><FacebookIcon className={style.icons} /></div>
                                <div className={style.iconsbg}><TwitterIcon className={style.icons} /></div>
                                <div className={style.iconsbg}><YouTubeIcon className={style.icons} /></div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12}>

                        <div className={style.subDiv}>
                            <div className={style.displ}>
                                <div className={style.mainContainer1}>
                                    <span className={style.heading5}>Who we are</span>
                                    <ul>
                                        <li>About us</li>
                                        <li>Client & Partners</li>
                                        <li>Team TechloSet</li>
                                        <li>Life at TechloSet</li>
                                        <li>Hire us</li>
                                        <li>Contact us</li>
                                    </ul>
                                </div>
                                <div className={style.mainContainer1}>
                                    <span className={style.heading5}>Insight</span>
                                    <ul>
                                        <li>Our Cases</li>
                                        <li>Careers</li>
                                        <li>Awards & Achivements</li>
                                        <li>Testimonials</li>
                                        <li>News</li>
                                        <li>Blog</li>
                                    </ul>
                                </div>
                                <div className={style.mainContainer1}>
                                    <span className={style.heading5}>Services</span>
                                    <ul>
                                        <li>Web App Development</li>
                                        <li>Mobile App Development</li>
                                        <li>Saas Products</li>
                                        <li>MVP Workshop</li>
                                        <li>Digital Marketing</li>
                                        <li>Blockchain Solutions</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={style.divMarg}>
                                <Grid item lg={12} md={12} sm={12} >
                                    <div className={style.Div1}>
                                        <p className={style.paragraph3}>Newsletter</p>
                                        <Box

                                        >
                                            <ButtonGroup variant="outlined" aria-label="outlined button group">
                                                <input className={style.input} type="text" placeholder="Email" />
                                                <Button style={{ backgroundColor: '#f05c2f', color: 'white' }}>Subscrib</Button>
                                            </ButtonGroup>
                                        </Box>

                                    </div>


                                </Grid>
                            </div>

                        </div>


                    </Grid>

                </Grid>
            </div>
            <div className={style.footerDiv}>
                COPYRIGHT © 2021 TECHLOSET. ALL RIGHTS RESERVED.
            </div>
        </div>
    );
}
export default FooterSection