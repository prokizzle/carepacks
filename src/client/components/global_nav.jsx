import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import navStyle from "../styles/nav.css"; // eslint-disable-line no-unused-vars
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";

class GlobalNav extends PureComponent {
  render() {
    // const currentTab = this.props.location.pathname.replace("/", "");
    return (
      <Navbar>
        <Link to="/">
          <NavbarBrand>carepacks</NavbarBrand>
        </Link>

        <Nav>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

GlobalNav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

GlobalNav.defaultProps = {
  location: {
    pathname: ""
  }
};

export default GlobalNav;
