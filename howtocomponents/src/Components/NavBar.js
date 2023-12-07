import React from "react";
import "../App.css";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        listStyle: "none",
        backgroundColor: "#555555",
        height : "auto",
        
        width: "100%",
      }}
    >
      <li
        className="fa fa-home iconList"
        style={{ backgroundColor: "#04AA6D", width: "100%", textAlign : "center", height : "100%", padding : "10px"}}
      ></li>
      <li className="fa fa-search" style={{ width: "100%" , textAlign : "center", height : "100%", padding : "10px"}}></li>
      <li className="fa fa-envelope" style={{ width: "100%" , textAlign : "center", height : "100%", padding : "10px"}}></li>
      <li className="fa fa-globe" style={{ width: "100%" , textAlign : "center", height : "100%", padding : "10px"}}></li>
      <li className="fa fa-trash" style={{ width: "100%" , textAlign : "center", height : "100%", padding : "10px"}}>
        {" "}
      </li>
      <li></li>
    </div>
  );
};

export default NavBar;
