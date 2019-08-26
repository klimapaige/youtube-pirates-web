import React from "react";
// routing specifics
import { BrowserRouter, Route } from "react-router-dom";
// import Nav from "./components/routing/Navigation";
import Routes from "./components/routing/RouteTable";

// the pages we've made so far.
import Home from "./components/pages/MainPage";

//all the CSS
import "./App.css";

import * as Api from "./data/RipperAPI";

const appLinks = [{ link: "/Home", component: Home, title: "Home" }];

const WrapperComponent = (WrappedComponent, props) => {
  return otherProps => <WrappedComponent {...otherProps} {...props} />;
};

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <h1>YouTube Pirates</h1>
          {/* <Nav links={appLinks} /> */}
        </header>
        <Route
          path="/"
          exact
          component={WrapperComponent(Home, { data: Api })}
        />
        <Routes links={appLinks} props={{ data: Api }} />
        <footer>
          <h2>YouTube Pirates LLC &copy;</h2>
          <h3>Established IDK When</h3>
        </footer>
      </BrowserRouter>
    </div>
  );
}
