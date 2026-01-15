import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2>Campus Lost & Found</h2>
      <div>
        <Link to="/">Home</Link> |{" "}
        <Link to="/lost">Lost</Link> |{" "}
        <Link to="/found">Found</Link> |{" "}
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    padding: "10px",
    backgroundColor: "#282c34",
    color: "white"
  }
};

export default Navbar;
