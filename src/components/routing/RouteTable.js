import React from "react";
import { Route } from "react-router-dom";

const WrappedComponent = (WrappedComponent, props) => {
  const comp = otherProps => <WrappedComponent {...otherProps} {...props} />;
  return comp;
};

export default function RouteTable({ links = [], props = {} }) {
  console.log(props.data);
  return (
    <main>
      {links.map(({ link, component, isExact = true }) =>
        isExact ? (
          <Route
            key={link}
            exact
            path={link}
            component={WrappedComponent(component, props)}
          />
        ) : (
          <Route
            key={link + "_loose"}
            path={link}
            component={WrappedComponent(component, props)}
          />
        )
      )}
    </main>
  );
}
