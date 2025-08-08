import React from "react";
import { IconSchool } from "@tabler/icons-react";

export const EducationItem = ({
  date = "2018 -2025",
  title = "Licenciatura, Ingeniería de Software",
  subtitle = "universidad veracruzana",
}) => {
  return (
    <>
      <div className="div-education">
        <div className="years">
          <button className="btn-clasic-blue">{date}</button>
          <div className="icon">
            <IconSchool color="white" size={"24px"} />
          </div>
        </div>
        <div className="title">
          <p className="typeWork-txt">{subtitle}</p>
          <p className="workAs-txt">{title}</p>
        </div>
      </div>
    </>
  );
};

export default EducationItem;
