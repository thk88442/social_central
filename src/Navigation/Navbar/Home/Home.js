import React from 'react';
import classes from './Home.css';
import FontAwesome from 'react-fontawesome';

const home = () => {
    return (
        <div className={classes.Home}>
            <a href="/" className={classes.homeIcon}>
                <FontAwesome 
                    name='twitter-square'
                    size='3x'
                    color='black'
                />
            </a>
            <p>Social Hub</p>
        </div>
    );
}

export default home;