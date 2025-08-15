import {
  IconBrandLinkedinFilled,
  IconBrandGithub,
  IconBrandPinterestFilled,
  IconBrandBlogger,
  IconChevronCompactUp,
} from "@tabler/icons-react";
import LogoScalable from "../core/LogoScalable";
import { Link } from "react-router-dom";
import SocialMediaIcons from "./SocialMediaIcons";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer-content">
      <div onClick={scrollToTop} className="up">
        <IconChevronCompactUp fontSize={"20px"} color="black" stroke={"2px"} />
      </div>
      <section className="container-message">
        <h2 className="message-footer">
          Thank you, <span className="message-footer-bye">Bye</span>
        </h2>
        <p>Don't forget to contact me</p>
        <p>Hope to hear from you soon.</p>
      </section>
      <section className="container-social-media flex-row">
        <div className="flex-row">
          <LogoScalable
            imagenImg={
              "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/splits-bills%2Fpandas.png?alt=media&token=d45078fa-d2c2-4db5-9a5a-322b7fd092d2"
            }
            customHeight="30px"
            customWidth="30px"
          ></LogoScalable>

          <p> 2025, made by Rosario Fuentes with ♡</p>
        </div>
        <SocialMediaIcons />
      </section>
    </div>
  );
};

export default Footer;
