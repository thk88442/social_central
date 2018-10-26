import React from 'react';
import classes from './Searchbar.css';

const searchbar = (props) => {
    return (
        <form method="POST" action="">
            <input className={classes.Searchbar} 
                type="text" 
                value={props.value}
                onChange={props.updateSearch}
                name="search"
                ></input>
        </form>
    );
}

export default searchbar;