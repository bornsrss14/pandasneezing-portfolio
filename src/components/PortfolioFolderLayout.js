import { useState } from "react";

const content = {
  default: (
    <div>
      <p>
        Bienvenido a mi selección de proyectos más destacados. Aquí encontrarás
        aplicaciones y sitios web desarrollados con <strong>React</strong>,
        <strong>JavaScript</strong> y un enfoque en{" "}
        <strong>diseño responsivo</strong>y <strong>UX/UI</strong>.
      </p>
      <p>
        Cada proyecto incluye una vista previa animada y una breve descripción
        para que puedas conocer su funcionalidad y el problema que resuelve.
      </p>
      <p>Explora las pestañas de colores para descubrir cada uno en detalle.</p>
      <p>Explora mi proyecto con el demo live en cada link</p>
      <p>Mi codigo disponible en cada repositorio de git</p>
    </div>
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
  { id: "rosrio", label: "To-do list", className: "red" },
];

const PortfolioFolderLayout = () => {
  const [activeTab, setActiveTab] = useState("default");

  return (
    <div>
      <div className="card">
        <button className="card-white"></button>
        <h1>Ros's Classified File.</h1>
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${tab.className} ${
                activeTab === tab.id ? "activeSelected" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="content">{content[activeTab]}</div>
      </div>
    </div>
  );
};

export default PortfolioFolderLayout;
