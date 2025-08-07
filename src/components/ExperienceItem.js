import { IconBriefcaseFilled } from "@tabler/icons-react";
import React from "react";

export const ExperienceItem = () => {
  return (
    <>
      <div className="itemContainerExperience">
        <div className="years">
          <button className="btn-clasic-blue">2025</button>
          <div className="icon">
            <IconBriefcaseFilled color="gray" size={"24px"} />
          </div>
        </div>
        <div className="title">
          <p className="typeWork-txt">Auxiliar Notarial</p>
          <p className="workAs-txt">Notaría Pública No.9</p>
        </div>
        <div className="lines">
          <div className="pene">
            <div className="circle"></div>
            <div className="line-full"></div>
            <div className="circle"></div>
          </div>
          <div className="div-dates-txt">
            <p>January, 2025 </p>
            <p>now</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceItem;
