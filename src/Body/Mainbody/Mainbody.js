import React from 'react';
import classes from './Mainbody.css'
import Sidebar from './Sidebar/Sidebar.js';
import Maincontent from '../Mainbody/Maincontent/Maincontent.js';

//Container for everything seen on page

const mainbody = () => {
        return (
            <div className={classes.Mainbody}>

                <Sidebar />
                
                <Maincontent />
                
            </div>
        );
    }


export default mainbody;
