import EducationItem from "../components/EducationItem";
import ExperienceItem from "../components/ExperienceItem";
import PortfolioFolderLayout from "../components/PortfolioFolderLayout";
import BtnClassic from "../core/BtnClassic";
import { IconArrowLeft } from "@tabler/icons-react";
import Folder from "../core/Folder";
import PostIt from "../core/PostIt";

import TypeIt from "typeit-react";

import { IconChevronDown } from "@tabler/icons-react";

export const Home = () => {
  const SuperStrong = ({ children }) => (
    <strong style={{ fontSize: "3rem" }}>{children}</strong>
  );

  return (
    <>
      <section className="about-me">
        <div className="grid-photo-introduction">
          <div className="photo">
            <div>
              <p>hello,</p>
              <p className="my-name-txt">
                <TypeIt>
                  My name is {""}
                  <SuperStrong>Rosario</SuperStrong>
                </TypeIt>
              </p>
            </div>
            <div className="brief-intro">
              <p>
                Creating intuitive interfaces where design meets seamless code.
              </p>
            </div>
            <div className="picture-of-me">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/portfolio%2Fme-me.jpg?alt=media&token=f8e75c9e-f940-4e45-8b0c-5dffe6f391c3"
                className="rosario"
                alt="rosario"
              ></img>
              <div class="blur-overlay"></div>
            </div>
          </div>
          <div>
            <h1>Introduction</h1>
            <div className="red-b">
              <h2>📍Software Engineer, based in Mexico</h2>
              <div className="flex-row grid-about-me">
                <p>
                  Front-End developer with a background in Software Engineering
                  and a user-centered mindset. I build clean, responsive, and
                  functional web solutions using modern technologies like
                  JavaScript, React, and TaildwindCSS, I work with precision,
                  purpose and character — ready to bring real value to any
                  development team.
                </p>
                <div>
                  <img
                    style={{ height: "130px", width: "200px" }}
                    alt="doodle"
                    src="https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/portfolio%2FOpen%20Doodles%20-%20Reading.png?alt=media&token=cd682543-e3e2-47a1-8caf-51627e802218"
                  ></img>
                </div>
              </div>
            </div>
            <div className="div-touch-files">
              <h1> Get in touch</h1>
              <div className="flex-row">
                <Folder label="LinkedIn" color="#D8D2FF" />
                <Folder label="GitHub" color="#D2F8D2" />
                <Folder label="Full CV" color="#C4B5FD" />
                <Folder label="Full CV" color="#fdb5e7ff" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid-section-projects">
        <div className="container-arrow-hash">
          <div>
            <IconArrowLeft size={"14rem"} className="arrow" />
          </div>
          <div>
            <div className="flex-hash">
              <p>#HTML</p>
              <p>#CSS</p>
            </div>
            <div className="flex-hash">
              <p>#JavaScript</p>
              <p>#React</p>
            </div>
            <div className="flex-hash">
              <p>#SQL</p>
              <p>#Java</p>
            </div>
            <div className="flex-hash">
              <p>#Figma</p>
              <p>#SQL</p>
              <p>#Java</p>
            </div>
            <div className="flex-hash">
              <p>#TypeScript</p>
              <p>#Taildwind</p>
              <p>#MongoDB</p>
            </div>
          </div>
        </div>
        <div>
          <PortfolioFolderLayout />
        </div>
      </section>
      <section className="grid-experience">
        <div className="item">
          <div className="flex-row">
            <h1>Experience</h1>
            <div className="big-circle">
              <IconChevronDown />
            </div>
          </div>
          <div>
            <ExperienceItem />
            <ExperienceItem />
            <ExperienceItem />
          </div>
        </div>
        <div className="item">
          <div className="flex-row">
            <h1>Expertice</h1>
            <div className="big-circle">
              <IconChevronDown />
            </div>
          </div>
          <div className="line-full"></div>
          <div>
            <p>
              Logo, brand identity, packagin, Poster y Editorial, Social media,{" "}
              3D and motion graphics
            </p>
          </div>
          <div className="flex-row">
            <h1>Hardskill</h1>
            <div className="big-circle">
              <IconChevronDown />
            </div>
          </div>
          <div>
            <p>
              Aqui van las coasas que se supone van en el apaartado de los logos
            </p>
          </div>
          <div className="flex-row">
            <h1>Softskill</h1>
            <div className="big-circle">
              <IconChevronDown />
            </div>
          </div>
          <div>
            <BtnClassic color="blue" btnText={"#Creativity"}></BtnClassic>
            <BtnClassic color="white" btnText={"#TimeManagment"}></BtnClassic>
            <BtnClassic color="blue" btnText={"#TeamWork"}></BtnClassic>
            <BtnClassic color="white" btnText={"#Communication"}></BtnClassic>
            <BtnClassic color="blue" btnText={"#Debe_Otra"}></BtnClassic>
          </div>
        </div>
        <div className="item">
          <div className="flex-row">
            <h1>Education</h1>
            <div className="big-circle">
              <IconChevronDown />
            </div>
          </div>
          <EducationItem
            date="2025"
            subtitle="Universidad Veracruzana"
            title="Licenciatura, Ingeniería de Software"
          />
          <EducationItem
            date="2024"
            subtitle="Cursera"
            title="Google UX Design Professional Certificate"
          />
          <EducationItem
            date="2024"
            subtitle="Udemy"
            title="JavaScript Course 2024"
          />
          <EducationItem
            date="feb. 2024"
            subtitle="freeCodeCamp"
            title="Responsive Web Design"
          />
          <EducationItem
            date="jul. 2025"
            subtitle="Udemy"
            title="TypeScript Fundamentals"
          />
        </div>
      </section>
      <footer className="footer">
        <p>Esto es el footer</p>
      </footer>
    </>
  );
};

export default Home;
