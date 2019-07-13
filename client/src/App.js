import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./pages/Game";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Game} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
