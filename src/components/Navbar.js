import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoScalable from "../core/LogoScalable";

export const Navbar = () => {
  const [language, setLanguage] = useState("EN");
  return (
    <div className="flex-row div-navbar">
      <Link to={"/"}>
        <div className="flex-row">
          <h3>
            <span style={{ color: "rgba(17, 0, 255, 1)" }}>panda</span>
            sneezing
          </h3>
          <LogoScalable
            imagenImg={
              "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/splits-bills%2Fpandas.png?alt=media&token=d45078fa-d2c2-4db5-9a5a-322b7fd092d2"
            }
            customHeight="30px"
            customWidth="30px"
          ></LogoScalable>
        </div>
      </Link>

      <ul className="flex-row-navbar">
        <li>
          <a href="#myResumen">Resume</a>
        </li>
        <li>
          <Link to={"/about-me"}>About me</Link>
        </li>

        <li>
          <Link to={"/blog"}>Articles</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div>
        {language === "EN" && (
          <div className="flex-row-nav">
            <p>EN</p>
            <LogoScalable
              imagenImg={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/960px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
              }
              customHeight={"1.3rem"}
              customWidth={"1.3rem"}
            ></LogoScalable>
          </div>
        )}

        {language === "ES" && (
          <div className="flex-row">
            <p>ES</p>
            <LogoScalable
              imagenImg={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png"
              }
              customHeight={"1.3rem"}
              customWidth={"1.3rem"}
            ></LogoScalable>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
