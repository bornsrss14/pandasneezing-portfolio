import { useState } from "react";

const content = {
  default: (
    <p>
      Aqui podrás encontrar un poco de mis proyectos personales sakdnsalnd
      sadnkasdnasldn
    </p>
  ),
  about: (
    <p>
      I am a passionate developer with a focus on creating clean and efficient
      digital experiences.
    </p>
  ),
  projects: (
    <p>
      Here are some of the projects I've worked on, including web apps, mobile
      apps, and UI designs.
    </p>
  ),
  education: (
    <p>
      My background includes a Computer Science degree and various
      certifications in web development.
    </p>
  ),
  other: (
    <p>My background incesto es otro ejemplo de como se puede renderizar</p>
  ),
};

const tabs = [
  { id: "about", label: "Pokedex", className: "green" },
  { id: "projects", label: "Notaría 9", className: "purple" },
  { id: "education", label: "MUBI::", className: "blue" },
  { id: "other", label: "Hiking Map", className: "yellow" },
  { id: "other", label: "To-do list", className: "red" },
];

const PortfolioFolderLayout = () => {
  const [activeTab, setActiveTab] = useState("default");

  return (
    <>
      <div className="card">
        <button className="card-white"></button>
        <h1>Ros's Classified File.</h1>
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${tab.className}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="content">{content[activeTab]}</div>
      </div>
    </>
  );
};

export default PortfolioFolderLayout;
