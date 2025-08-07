import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoScalable from "../core/LogoScalable";

export const Navbar = () => {
  const [language, setLanguage] = useState("EN");
  return (
    <div className="flex-row div-navbar">
      <Link to={"/"}>
        <div className="flex-row">
          <h3>pandasneezing</h3>
          <LogoScalable
            imagenImg={
              "https://as1.ftcdn.net/jpg/03/52/92/98/1000_F_352929888_4qsEWbJfmOrYWiJJpuEqfSyPDGryMkuH.jpg"
            }
            customHeight="30px"
            customWidth="30px"
          ></LogoScalable>
        </div>
      </Link>

      <ul className="flex-row">
        <li>
          <a href="#lss">About me</a>
        </li>
        <li>
          <a href="#lss">Resume</a>
        </li>
        <li>
          <Link to={"/blog"}>Articles</Link>
        </li>
        <li>
          <Link to={"/"}>Contact</Link>
        </li>
      </ul>
      <div>
        {language === "EN" && (
          <div className="flex-row">
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
