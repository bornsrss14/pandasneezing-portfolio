import { Link } from "react-router-dom";

export const LogoScalable = ({ customHeight, customWidth }) => {
  const containerLogo = {
    width: customWidth,
    height: customHeight,
    cursor: "pointer",
    borderRadius: "50%",
    overflow: "hidden",
  };
  return (
    <div style={containerLogo}>
      <Link to={"/"}>
        <img
          className="img-full-cover"
          src="https://as1.ftcdn.net/jpg/03/52/92/98/1000_F_352929888_4qsEWbJfmOrYWiJJpuEqfSyPDGryMkuH.jpg"
          alt="MUBI logo"
        />
      </Link>
    </div>
  );
};

export default LogoScalable;
