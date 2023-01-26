import React from 'react';
import style from './SixthSection.module.css'
import { Grid } from '@mui/material';
import aspect from '../../assets/aspect.webp'
import workScaler from '../../assets/workScaler.webp'
import beauty from '../../assets/Mica-beauty.png'
import kospak from '../../assets/kospak.webp'
import client from '../../assets/clientImage3.webp'
import client1 from '../../assets/clientImage1.webp'
// import { borderRadius } from '@mui/system';
function SixthSection() {
  return (
    <div className={style.mainDiv}>
      <Grid container spacing={2}>
        <Grid item lg={5} md={12} sm={12} xs={12}>
          <div className={style.subDiv}>
            <p className={style.paragraph}>What our clients say about TechloSet</p>
            <div>
              <iframe
                className={style.ytVideo}
                src="https://www.youtube.com/embed/4CP7OMs20Ag?controls=1"
                title="TechloSet Services"
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                frameBorder='0'
                allowFullScreen
              ></iframe>
            </div>
            <div className={style.imgdisp}>
              <div><img src={aspect} style={{ width: '100px' }} /></div>
              <div><img src={workScaler} style={{ width: '100px' }} /></div>
              <div> <img src={beauty} style={{ width: '100px' }} /></div>
              <div> <img src={kospak} style={{ width: '100px' }} /></div>
            </div>
          </div>
        </Grid>
        <Grid item lg={7} md={12} sm={12} xs={12}>
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={6}>
            <div className={style.bgst2}>
              <div className={style.disp4}>
                <div><p className={style.paragraph1}> it has been a great opportunity to work with TechloSet. They have been helpful in providing more ideas for the project whilst delivering very effectively...”</p></div>
              </div>
              <div className={style.disp3}>
                <div><img src={client1} style={{ width: '60px', height: '60px', backgroundColor: '#e4e9fa', borderRadius: '70px' }} /></div>


                <div>
                  <div className={style.heading1}>Melbourne</div>
                  <div className={style.heading2}>Entrepreneur</div>

                </div>
              </div>
            </div>



              <div className={style.bgst}>
    
                  <div><p className={style.paragraph1}>“They continue to improve our applications as requested. Communication with this team is very good. They are responsive...”</p>
                    <div className={style.disp3}>
                      <div><img src={client} style={{ width: '60px', height: '60px', borderRadius: '70px' }} /></div>
                      <div>
                        <div className={style.heading1}>Theredcross</div>
                        <div className={style.heading2}>Startup</div>
                      </div>
                    </div>
                  </div>
                </div>


              <div className={style.bgst2}>
                  <div><p className={style.paragraph1}>Excellent delivery/ fast and very detailed.”</p></div>
              
                <div className={style.disp3}>
                  <div><img src={client1} style={{ width: '60px', height: '60px', backgroundColor: '#e4e9fa', borderRadius: '70px' }} /></div>


                  <div>
                    <div className={style.heading1}>Melbourne</div>
                    <div className={style.heading2}>Entrepreneur</div>

                  </div>
                </div>
                </div>
            </Grid>
            <Grid item lg={6} md={6} sm={6}>  {/* card one */}
              <div className={style.bgst2}>
                <div className={style.disp4}>
                  <div><p className={style.paragraph1}> it has been a great opportunity to work with TechloSet. They have been helpful in providing more ideas for the project whilst delivering very effectively...”</p></div>
                </div>
                <div className={style.disp3}>
                  <div><img src={client1} style={{ width: '60px', height: '60px', backgroundColor: '#e4e9fa', borderRadius: '70px' }} /></div>


                  <div>
                    <div className={style.heading1}>Melbourne</div>
                    <div className={style.heading2}>Entrepreneur</div>

                  </div>
                </div>
              </div>
              {/* card tow */}
              <div className={style.bgst}>
                <div className={style.disp4}>
                  <div><p className={style.paragraph1}>“They continue to improve our applications as requested. Communication with this team is very good. They are responsive...”</p>
                    <div className={style.disp3}>
                      <div><img src={client} style={{ width: '60px', height: '60px', borderRadius: '70px' }} /></div>
                      <div>
                        <div className={style.heading1}>Theredcross</div>
                        <div className={style.heading2}>Startup</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 

              {/* card thired */}
              <div className={style.bgst2}>
                <div className={style.disp4}>
                  <div><p className={style.paragraph1}>Excellent delivery/ fast and very detailed.”</p></div>
                </div>
                <div className={style.disp3}>
                  <div><img src={client1} style={{ width: '60px', height: '60px', backgroundColor: '#e4e9fa', borderRadius: '70px' }} /></div>

                  <div>
                    <div className={style.heading1}>Melbourne</div>
                    <div className={style.heading2}>Entrepreneur</div>

                  </div>
                </div>
              </div>
            </Grid>

          </Grid>

        </Grid>

      </Grid>
    </div>

  );
}
export default SixthSection