import React, {Component} from 'react';
import classes from './Navbar.css';
import Searchbar from './Searchbar/Searchbar.js';
import Home from './Home/Home.js';
import Profiles from './Profiles/profiles.js';

//Container component for fixed navbar at top

class Navbar extends Component {
    state = {
        searchText: 'Search',
    }

    updateSearchHandler(event) {
        this.setState({searchText: event.target.value}, () =>{
            console.log(this.state.searchText)
        });
    }

    render() {
        return (
            <div className={classes.OuterNavbar}>
                <div className={classes.Navbar}>
                    <Home />
                    <Searchbar updateSearch={(event) => this.updateSearchHandler(event)}
                        value={this.state.searchText}/>
                    <Profiles />
                </div>
            </div>
        );
    }
}

export default Navbar;