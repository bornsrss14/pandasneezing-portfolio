import React from "react";
import { Link } from "react-router-dom";
import LogoScalable from "../core/LogoScalable";

export const Navbar = () => {
  return (
    <div className="flex-row">
      <Link to={"/"}>
        <div className="flex-row">
          <h3>pandasneezing</h3>
          <LogoScalable customHeight="30px" customWidth="30px"></LogoScalable>
        </div>
      </Link>

      <ul className="flex-row">
        <li>
          <p>About me</p>
        </li>
        <li>
          <p>Resume</p>
        </li>
        <li>
          <Link to={"/blog"}>Articles</Link>
        </li>
        <li>
          <Link to={"/"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
