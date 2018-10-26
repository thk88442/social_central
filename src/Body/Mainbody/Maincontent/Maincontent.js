import React, {Component} from 'react';
import classes from './Maincontent.css';
import Posts from './Posts/Posts.js';
import axios from 'axios';

//Maincontent on the body

const maincontent = () => {
        return (
            <div className={classes.Maincontent}>
                <Posts />
            </div>
        );
}

export default maincontent;