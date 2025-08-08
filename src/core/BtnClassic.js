import React from "react";

export const BtnClassic = ({ color, btnText }) => {
  const StyleBtn = {
    color: color === "white" ? "blue" : "white",
    backgroundColor: color === "white" ? "white" : "blue",
    border: `1px solid ${color === "white" ? "blue" : "none"}`,
  };
  return (
    <>
      <button style={StyleBtn} className="btn-clasic-blue">
        {btnText}
      </button>
    </>
  );
};

export default BtnClassic;
