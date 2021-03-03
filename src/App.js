import React from "react";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bulma/css/bulma.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path='/'>
          <SearchForm/>
        </Route>
        <Route path={`/:username`}>
          <UserProfile />
        </Route>
      </Router>
    </div>
  );
}

export default App;
