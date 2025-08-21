import { useState } from "react";
import LogoScalable from "./LogoScalable";
import PreviousMap_ from "postcss/lib/previous-map";

export const LanguageToggle = ({ toggleLanguaje, languaje }) => {
  return (
    <div onClick={toggleLanguaje}>
      <div className="wrapper-languajes">
        <li className="item-idiom">
          <div className="flex-row-nav">
            <p>{languaje.idiom}</p>
            <LogoScalable
              imagenImg={languaje.flag}
              customHeight={"1.3rem"}
              customWidth={"1.3rem"}
            ></LogoScalable>
          </div>
        </li>
      </div>
    </div>
  );
};
export default LanguageToggle;
