import React, { Component } from "react";
import UserCardList from "./UserCardList";

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
                    <button type="button"  >Submit</button>
                </form>
                {usersArray.length ? <UserCardList usersArray={usersArray}/> : <p>No users to display...</p>}
            </>
        )
    }
}

export default SearchForm;