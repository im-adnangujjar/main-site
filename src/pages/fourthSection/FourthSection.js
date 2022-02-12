import React from 'react';
import style from './FourthSection.module.css'
import { Grid } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import resuma from '../../assets/iam.webp'

import jango from '../../assets/jangoIcon13.webp'
import react from '../../assets/reactIcon8.webp'
import learn from '../../assets/learnIcon7.webp'
import strip from '../../assets/strip15.webp'
import icon from '../../assets/icon16.webp'
import { flexbox } from '@mui/system';
function FourthSection() {
    return (
        <div className={style.mainDiv}>
        <div className={style.subDiv}>
            <Grid container spacing={2}>
                <Grid items lg={6} md={6} sm={12}>
                    <div  >
                        <img  className={style.imag1}src={resuma} />
                    </div>
                </Grid>
                <Grid items lg={6} md={6} sm={12} xs={12}>
                    <div className={style.mainContainer1}>

                        <h1 className={style.heading}>RESUMAS</h1>

                        <p className={style.paragraph1}>RESUME BUILDER MOBILE APP</p>
                        <div className={style.disp1}>
                            <p className={style.paragraph2}>An AI Based Mobile app that allows users to Build, Scan, and Optimize their resume with one click.</p>
                        </div>
                        <div>
                            <div className={style.disp4}>
                                <div className={style.bg}><img style={{ width: "50px" }} src={jango} /></div>
                                <div className={style.bg}><img style={{ width: "50px" }} src={react} /></div>
                                <div className={style.bg}><img style={{ width: "50px" }} src={learn} /></div>
                                <div className={style.bg}><img style={{ width: "50px" }} src={strip} /></div>
                                <div className={style.bg}><img style={{ width: "50px" }} src={icon} /></div>
                            </div>
                            <div className={style.disp3}>
                                <p className={style.paragrap3}>View case</p>
                                <div className={style.icon1}><ArrowRightAltIcon style={{ width: "50px" }}  /></div>

                            </div>
                        </div>
                    </div>

                </Grid>
            </Grid>
            </div>
        </div>
    );
}
export default FourthSection
