import React from 'react';
import classes from './Post.css';

//individual Post

const post = (props) => {
    return (
        <div className={classes.Post}>
            <article>
                <div>
                    Person: {props.person}
                </div>
                <div>
                    Index: {props.index}
                </div>
            </article>
        </div>
    );
}

export default post;
