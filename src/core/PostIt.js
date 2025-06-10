import React from "react";

const PostIt = ({ children, color = "#FFFB7D" }) => {
  return (
    <div className="postit" style={{ backgroundColor: color }}>
      <div className="postit-glue"></div>
      <div className="postit-content">{children}</div>
    </div>
  );
};

export default PostIt;
