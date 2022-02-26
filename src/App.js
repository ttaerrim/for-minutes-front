import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "components/domain/Main/Main";
import MinutesList from "components/domain/Minute/MinutesList";
import Post from "components/domain/Post/Post";
import About from "components/domain/Main/About";
import Detail from "components/domain/Detail/Detail";
import Update from "components/domain/Post/Update";
import Navigation from "components/layout/Navigation/Navigation";
import Footer from "components/layout/Footer/Footer";
import ScriptUpdate from "components/domain/Detail/ScriptUpdate";
import ScrollToTop from "components/layout/ScrollToTop/ScrollToTop";
import "App.scss";

class App extends Component {
  render() {
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
  }
}

export default App;
