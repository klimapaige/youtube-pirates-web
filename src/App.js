import React from "react";
// routing specifics
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/routing/Navigation";
import Routes from "./components/routing/RouteTable";

// the pages we've made so far.
import Home from "./components/pages/MainPage";
import Search from "./components/pages/SearchPage";

//all the CSS
import "./App.css";

// data management stuffs
import * as Mock from "youtube-pirates-shared";

const WrappedComponent = (CustomComponent, props = {}) => () => (
  <CustomComponent {...props} />
);

const appLinks = [
  { link: "/Home", component: Home, title: "Home" },
  {
    link: "/Search",
    component: WrappedComponent(Search, {
      data: { fetchVideos: async () => [] }
    }),
    title: "Search"
  }
];

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <h1>YouTube Pirates</h1>
          <Nav links={appLinks} />
        </header>
        <Route path="/" exact component={Home} />
        <Routes links={appLinks} />
        <footer>
          <h2>YouTube Pirates LLC &copy;</h2>
          <h3>Established IDK When</h3>
        </footer>
      </BrowserRouter>
    </div>
  );
}
