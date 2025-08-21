import LogoScalable from "../core/LogoScalable";
import SocialMediaIcons from "./SocialMediaIcons";

export const DetailedObjectArticle = ({ objectItem }) => {
  return (
    <>
      <article className="article-margin">
        <h1>{objectItem.title}</h1>
        <div className="flex-row">
          <p>
            <em>{objectItem.content}</em>
          </p>
          <div>
            <img
              height={"200px"}
              alt="img-banner"
              src={objectItem.articleImg}
            />
            <p className="typeWork-txt">
              {" "}
              detail: adjunto captura de la advertencia hecha por gitGardian
            </p>
          </div>
        </div>
        {objectItem.paragrapsArticle.map((section, index) => {
          return (
            <section key={index} style={{ margin: "1rem 0" }}>
              {section.subtitleParagraph && (
                <h3 style={{ marginBottom: "0.5rem" }}>
                  {section.subtitleParagraph}
                </h3>
              )}
              {section.paragraph && <p>{section.paragraph}</p>}
              {section.list && section.list.length > 0 && (
                <ul>
                  {section.list.map((item, idx) => {
                    return <li key={idx}>{item}</li>;
                  })}
                </ul>
              )}
              {section.code && <p>{section.code}</p>}
            </section>
          );
        })}

        <section style={{ marginBottom: "6rem" }}>
          <h3>References</h3>
          <p>
            React. (2025). <i>React documentation</i>. https://react.dev
          </p>
          <p>
            GitHub. (2025). <i>GitHub Docs</i>. https://docs.github.com
          </p>
        </section>
      </article>
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
    </>
  );
};

export default DetailedObjectArticle;
