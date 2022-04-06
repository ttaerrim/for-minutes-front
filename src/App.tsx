import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "components/Main/Main";
import MinutesList from "components/Minute/MinutesList";
import Post from "components/Post/Post";
import About from "components/Main/About";
import Detail from "components/Detail/Detail";
import Update from "components/Post/Update";
import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";
import ScriptUpdate from "components/Detail/ScriptUpdate";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";
import "App.scss";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/post/" component={Post} />
        <Route exact path="/about/" component={About} />
        <Route exact path="/minutes/" component={MinutesList} />
        <Route exact path="/minute/:id/" component={Detail} />
        <Route exact path="/minute/update/:id/" component={Update} />
        <Route
          exact
          path="/minute/script/update/:id/"
          component={ScriptUpdate}
        />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
