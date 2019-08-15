import React from "react";
import { Route } from "react-router-dom";

export default function RouteTable({ links = [], injectedProps = {} }) {
  return (
    <main>
      {links.map(({ link, component, isExact = true }) =>
        isExact ? (
          <Route
            key={link}
            exact
            path={link}
            component={component}
            {...injectedProps}
          />
        ) : (
          <Route
            key={link + "_loose"}
            path={link}
            component={component}
            {...injectedProps}
          />
        )
      )}
    </main>
  );
}
