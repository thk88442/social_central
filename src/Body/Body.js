import React from 'react';
import classes from './Body.css';
import Mainbody from './Mainbody/Mainbody.js';

const body = () => {
    return (
        <div className={classes.Body}>
            <Mainbody />
        </div>
    );
}

export default body;