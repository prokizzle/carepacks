import React from "react";
import PropTypes from "prop-types";
import About from "./components/about";
import Home from "./components/home";
import GlobalNav from "./components/global_nav";
import "bootstrap";
import { withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const Root = ({ route, children }) => {
  return (
    <div className="bg-warning w-199 h-100">
      <GlobalNav />
      {renderRoutes(route.routes)}
      {children}
    </div>
  );
};

Root.propTypes = {
  route: PropTypes.object,
  children: PropTypes.object
};

const routes = [
  {
    path: "/",
    component: withRouter(Root),
    init: "./init-top",
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/about",
        exact: true,
        component: About
      }
    ]
  }
];

export { routes };
