import { useState } from "react";

const content = {
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
};

const tabs = [
  { id: "about", label: "About Me", className: "green" },
  { id: "projects", label: "Projects", className: "purple" },
  { id: "education", label: "Education", className: "blue" },
  { id: "other", label: "Education", className: "yellow" },
];

const PortfolioFolderLayout = () => {
  const [activeTab, setActiveTab] = useState("about");

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
