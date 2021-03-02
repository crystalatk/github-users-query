import React, { Component } from "react";
import UserCardList from "./UserCardList";
import UserProfile from "./UserProfile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            usersArray: []
        }
    }

    _onChange = (field, value) => {
        this.setState({
            [field]: value
        })
    }

    _handleSubmit = async (event) => {
        event.preventDefault();
        const url =  `https://api.github.com/users/${this.state.username}`;
        const newUserData = await fetch(url)
            .then(response => response.json());
        this.setState({
            usersArray: [...this.state.usersArray, newUserData],
        });
    }

    render() {
        const { usersArray } = this.state;
        return (
            <>
                <Router>
                    <Route exact path='/'>
                        <form onSubmit={this._handleSubmit}>
                            <label >
                                <input 
                                    name="username" 
                                    placeholder="Enter a Username" 
                                    value={this.state.username} 
                                    type="text"
                                    onChange={(event) => {
                                        this._onChange(event.target.name, event.target.value);
                                    }}
                                />
                            </label>
                            <button type="submit"  >Submit</button>
                        </form>
                        {usersArray.length ? <UserCardList usersArray={usersArray}/> : <p>No users to display...</p>}
                    </Route>
                    <Route path='/user/:username'>
                        <UserProfile />
                    </Route>
                </Router>
            </>
        )
    }
}

export default SearchForm;