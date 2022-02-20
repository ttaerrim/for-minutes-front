import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./container/Main/Main";
import MinutesList from "./container/Minute/MinutesList";
import Post from "./container/Post/Post";
import About from "./container/Main/About";
import Detail from "./container/Detail/Detail";
import Update from "./container/Post/Update";
import Navigation from "./component/Navigation/Navigation";
import Footer from "./component/Footer/Footer";
import ScriptUpdate from "./container/Detail/ScriptUpdate";

import ScrollToTop from "./component/ScrollToTop/ScrollToTop";

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
