import React from 'react';
import Styles from './Card.module.css'

function Card(props) {
    
    return (
        <div className={Styles.mainDiv} >
        <div style={{display:'flex',justifyContent:"center"}}>
            <div className={Styles.Card}>
                <div className={Styles.disp}>
                    <div className={Styles.images}>
                    
                        <img style={{ margin: "0px 15px 0px 20px" }} src={props.img} alt='error' />
                    </div>
                    <p className={Styles.paragraph1}>{props.text},</p>
                </div>
                <p Class={Styles.paragraph2}>{props.text1}</p>
            </div>
        </div>
        </div>
    );
}
export default Card

// skillName: 'Mobile App Development',
//         skillDesc: 'akldfdlkfsddl flksdkadjv lsddjf jlkfsdlfkjdfsl kvsad',
//         skillImage: '',
//         skillBackImage: '',