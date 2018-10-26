import React, {Component} from 'react';
import classes from './Posts.css'
import Post from './Post/Post.js';
import Auxx from '../../../../Hoc/Auxx/Auxx.js';

//container for all Post

class Posts extends Component {
    state = {
        person: [],
    }  

    componentDidMount() {
        console.log('[componentDidMount]');
    }
    
    render() {
        return (
            <div className={classes.Posts}>
                <Post />
            </div>
        );
    }
} 

export default Posts;
