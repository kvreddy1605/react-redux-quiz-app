import React from 'react';
import classes from './Header.css';
import image from '../../images/result.png'

const Header = (props) => {
    
    return(
        <div className={classes.Header}>
           <span>Assessment</span>
           <img src={image} alt={'assessment-img'}></img>
        </div>
    );

}

export default Header;