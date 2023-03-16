import React from "react";
import MasksIcon from "@mui/icons-material/Masks";

import "./header.css";

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_container1">
        <p className="icon">
          <MasksIcon />
          Hootsuite
        </p>
        <p>Platform</p>
        <p>Plans</p>
        <p>Enterperise</p>
        <p>Resources</p>
        <p>Education</p>
      </div>
      <div className="header_container11">
        <p style={{ marginRight: "1em" }}>Contact Us</p>
        <p style={{ marginRight: "1em" }}>Log In</p>
        <button style={{ backgroundColor: "green", color: "white" }}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
