import React from "react";

const Folder = ({ label = "Proyecto", color = "#FACC15" }) => {
  const style = { backgroundColor: color };
  return (
    <div className="folder typewriter" style={style}>
      <div style={style} className="folder-tab"></div>
      <span className="folder-label">{label}</span>
    </div>
  );
};

export default Folder;
