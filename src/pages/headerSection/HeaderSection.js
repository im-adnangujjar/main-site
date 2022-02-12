import React from 'react';
// import './HeaderSection.css'
import Navbar from '../../component/navbar/Navbar'
import styles from './HeaderSection.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { style } from '@mui/system';
function HeaderSection() {
  return (

    <div className={styles.mainContainar} >

      <div className={styles.mainDiv}>
        <div className={styles.subDiv}>
          <Navbar />
          <div>
            <p className={styles.paragraphs1}>Providing world class tech-solutions to digitally transform your business.|
              Mobile</p>

            <ul className={styles.tab}>
              <li> <a className={styles.text} href=""><p className={styles.linkText}>Mobile App Development</p></a></li>
              <li> <a className={styles.text} href=""><p className={styles.linkText}>Web App Development</p></a></li>
              <li> <a className={styles.text} href=""><p className={styles.linkText}>Artificial Intelligence</p></a></li>
              <li> <a className={styles.text} href=""><p className={styles.linkText}>E-Commerce</p></a></li>
              <li> <a className={styles.text} href=""><p className={styles.linkText}>DevOps</p></a></li>
              <li> <a className={styles.text} href=""><p className={styles.linkText}>Blog</p></a></li>
            </ul>
          </div>
          </div>
          <div>
            <div className={styles.iconmargin}>
            <GitHubIcon className={styles.icons} />
            <InstagramIcon className={styles.icons1} />
            <FacebookIcon className={styles.icons2} />
          </div>
        </div>
</div>
    </div>
  );
}
export default HeaderSection