import React, { Component } from 'react';
import '../App.css';
import { Switch, Route, Redirect } from "react-router-dom"; 
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './navList/HomePage';
import {AboutPage} from './navList/AboutPage';
import {Authors} from './blog/authors/Authors';
import {AuthorInfo} from "./blog/authors/AuthorInfo";

class App extends Component {
  //<Route exact path="/author/:id" component={AuthorInfo} />
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path = "/authors" component = {Authors} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/author" component={AuthorInfo} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
