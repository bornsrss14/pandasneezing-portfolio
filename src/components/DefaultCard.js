import React from "react";

export const DefaultCard = () => {
  return (
    <div className="projects-intro">
      <div className="projects-intro-text">
        <div className="postItItem">
          <img
            className="img-full-cover"
            alt="postit"
            src="https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/portfolio%2FwhitePaperRemove.png?alt=media&token=48457f4f-4739-4248-9724-7d5c0b219cc1"
          ></img>
        </div>
        <p>
          Bienvenido a mi selección de proyectos más destacados. Aquí
          encontrarás aplicaciones y sitios web desarrollados con{" "}
          <strong>React</strong>, <strong>JavaScript</strong> y un enfoque en{" "}
          <strong>diseño responsivo</strong> y <strong>UX/UI</strong>.
        </p>
        <p>
          Cada proyecto incluye una vista previa animada y una breve descripción
          para que puedas conocer su funcionalidad y el problema que resuelve.
        </p>
        <p>
          Explora las pestañas de colores para descubrir cada uno en detalle.
        </p>
        <p>Explora mi proyecto con el demo live en cada link</p>
        <p>Mi código disponible en cada repositorio de Git</p>
      </div>
    </div>
  );
};

export default DefaultCard;
