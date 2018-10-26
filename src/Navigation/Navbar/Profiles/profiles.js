import React, {Component} from 'react';
import classes from './profiles.css'
import FontAwesome from 'react-fontawesome';

class Profile extends Component {
    state = {
        twitterAuthenticated: false,
        instagramAuthenticated: false,
        facebookAuthenticated: false,
        googleAuthenticated: false,
        user: null,
        token: ''
    }

    googleAuthenticatedHandler = () => {
        this.setState({googleAuthenticated: true});
    }

    instagramAuthenticatedHandler = () => {
        this.setState({instagramAuthenticated: true});
    }

    facebookAuthenticatedHandler = () => {
        this.setState({facebookAuthenticated: true});
    }

    twitterAuthenticatedHandler = () => {
        this.setState({twitterAuthenticated: true});
    }


    render() {
        let twitterClassStyles = [classes.profile];
        let instagramClassStyles = [classes.profile];
        let facebookClassStyles = [classes.profile];
        let googleClassStyles = [classes.profile]; 

        if (this.state.twitterAuthenticated === true) {
            twitterClassStyles.push(classes.profileLoggedIn);
        }

        if (this.state.instagramAuthenticated === true) {
            instagramClassStyles.push(classes.profileLoggedIn);
        }

        if (this.state.facebookAuthenticated === true) {
            facebookClassStyles.push(classes.profileLoggedIn);
        }

        if (this.state.googleAuthenticated === true) {
            googleClassStyles.push(classes.profileLoggedIn);
        }



        return (
            <div className={classes.Profiles}>
                <a href="http://localhost:4000/auth/twitter" className={twitterClassStyles.join(' ')}>
                    <FontAwesome 
                        name='twitter-square'
                        size='2x'
                    />
                </a>
    
                <a href="http://localhost:4000/auth/instagram" className={instagramClassStyles.join(' ')}>
                    <FontAwesome 
                        name="instagram"
                        size='2x'
                    />
                </a>

                <a href="http://localhost:4000/auth/facebook" className={facebookClassStyles.join(' ')}>
                    <FontAwesome 
                        name="facebook-square"
                        size='2x'
                    />
                </a>
    
                <a href="http://localhost:4000/auth/google" className={googleClassStyles.join(' ')}>
                    <FontAwesome 
                        name="google"
                        size='2x'
                    />
                </a>
         
            </div>
        );
    }
}

export default Profile;