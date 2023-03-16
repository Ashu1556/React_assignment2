import React from "react";
import "./fotter.css";
import RocketLaunchSharpIcon from "@mui/icons-material/RocketLaunchSharp";
import WebAssetSharpIcon from "@mui/icons-material/WebAssetSharp";
import ContactMailTwoToneIcon from "@mui/icons-material/ContactMailTwoTone";
const Fotter = () => {
  return (
    <div className="fotter_container">
      <div className="fotter_container1">
        <RocketLaunchSharpIcon
          sx={{}}
          style={{ width: "250px", height: "250px" }}
        />
        <p>Enterprise organization sucessfully launched</p>
      </div>
      <div className="fotter_container1">
        <WebAssetSharpIcon style={{ width: "250px", height: "250px" }} />
        <p>Enterprise users onboarded seamlessly</p>
      </div>
      <div className="fotter_container1">
        <ContactMailTwoToneIcon style={{ width: "250px", height: "250px" }} />
        <p>Professionals trained on product and strategy</p>
      </div>
    </div>
  );
};

export default Fotter;
