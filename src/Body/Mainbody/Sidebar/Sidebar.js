import React from 'react';
import classes from './Sidebar.css';
import Auxx from '../../../Hoc/Auxx/Auxx.js';

const sidebar = () => {
        return (
            <Auxx>
                <div className={classes.Sidebar}>
                    <p>Stuff</p>
                    <p>Stuff</p>
                    <p>Stuff</p>
                    <p>Stuff</p>
                    <p>Stuff</p>
                </div>
                <div className={classes.Placeholder}>
                </div>
            </Auxx>
        );
} 

export default sidebar;