import { Grid } from '@mui/material';
import React from 'react';
import react from '../../assets/reactIcon8.webp'
import pytorchIcon5 from '../../assets/New folder/pytorchIcon5.png'
import MongodbIcon4 from '../../assets/New folder/MongodbIcon4.png'
import caffeIcon3 from '../../assets/New folder/caffeIcon3.png'
import kerasIcon10 from '../../assets/New folder/kerasIcon10.png'
import jangoIcon13 from '../../assets/jangoIcon13.webp'
import expressIcon12 from '../../assets/New folder/expressIcon12.png'
import firebaseIcon6 from '../../assets/New folder/firebaseIcon6.png'
import ffIcon11 from '../../assets/New folder/ffIcon11.png'
import typeScript from '../../assets/New folder/typeScript.png'
import learnIcon7 from '../../assets/New folder/learnIcon7.png'
import javascriptIcon9 from '../../assets/New folder/javascriptIcon9.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import style from './SecondLastSection.module.css'

function SecondLastSection() {
    return (
        <div className={style.mainDiv}>
            <div className={style.subDiv}>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <div className={style.display2}>
                            <div className={style.imag1bg}><img src={react} style={{ width: "100px" }} /></div>
                            <div className={style.imag1bg}><img src={pytorchIcon5} style={{ width: "100px" }} /></div>
                        </div>
                        <div className={style.display1}>
                            <div className={style.imag1bg}><img src={MongodbIcon4} style={{ width: "100px" }} /></div>
                            <div className={style.imag1bg}><img src={caffeIcon3} style={{ width: "100px" }} /></div>
                        </div>
                        <div className={style.display3} >
                            <div className={style.imag1bg}><img src={kerasIcon10} style={{ width: "100px" }} /></div>
                            <div className={style.imag1bg}><img src={jangoIcon13} style={{ width: "100px" }} /></div>
                        </div>
                        <div className={style.display1}>
                            <div className={style.imag1bg}><img src={expressIcon12} style={{ width: "100px" }} /></div>
                            <div className={style.imag1bg}><img src={firebaseIcon6} style={{ width: "100px" }} /></div>
                        </div>
                        <div className={style.display3}>
                            <div className={style.imag1bg}><img src={ffIcon11} style={{ width: "100px" }} /></div>
                            <div className={style.imag1bg}><img src={typeScript} style={{ width: "100px" }} /></div>
                        </div>
                        <div className={style.display1}>
                            <div className={style.imag1bg}><img src={learnIcon7} style={{ width: "100px" }} /></div>
                            <div className={style.imag1bg}><img src={javascriptIcon9} style={{ width: "100px" }} /></div>
                        </div>
                    </Grid>
                    <Grid item lg={6}>
                        <div><h3 className={style.heading}>Technology Capabilities</h3>
                            <p className={style.paragraph}>Techloset aspires to enhance the productivity and growth of businesses around the world with a comprehensive range of digital solutions and services using the latest state of art technologies. Techloset aspires to enhance the productivity and growth of businesses around the world with a comprehensive range of digital solutions and services using the latest state of art technologies. Techloset aspires to enhance the productivity and growth of businesses around the world with a comprehensive range of digital solutions and services using the latest state of art technologies.</p>
                        </div>
                        <div  className={style.display4}>
                        <div className={style.iconbg}>< ArrowRightAltIcon style={{ width: '50px', height: '50px' }} /></div>
                        <div><p className={style.paragraph2}>100% Average Customer Satisfaction</p></div>
                        </div>
                        <div  className={style.display4}>
                            <div className={style.iconbg}>< ArrowRightAltIcon style={{ width: '50px', height: '50px' }} /></div>
                            <div><p className={style.paragraph2}>70.3% Net Promoter Scope</p></div>
                        </div>
                        <div className={style.display4}>
                            <div className={style.iconbg}>< ArrowRightAltIcon style={{ width: '50px', height: '50px' }} /></div>
                            <div><p className={style.paragraph2}>174 Active World-class Client</p></div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
export default SecondLastSection