import { IconLayoutGrid, IconList } from "@tabler/icons-react";
import ArticleItemList from "../components/ArticleItemList";
import { allMainArticles } from "../utils/AllArticles";
import { useState } from "react";
import { Link } from "react-router-dom";
import ArticleItemGrid from "../components/ArticleItemGrid";

export const Articles = () => {
  const [articles] = useState(allMainArticles);
  const [view, setView] = useState("list");
  return (
    <div>
      <div className="hero-articles">
        {" "}
        Este es un breve espacio donde podrás leer mis artículos más recientes.
        Creo que una de las mejores formas de reforzar mi conocimiento es
        escribir sobre lo que voy entendiendo después de la práctica ✨
      </div>
      <section>
        <div className="container-grid-view">
          <h3>Upcoming articles</h3>
          <div className="flex-row">
            <div onClick={() => setView("list")} className="icono-view">
              <IconList stroke={2} color="gray" size={"22px"} />
            </div>
            <div onClick={() => setView("grid")} className="icono-view">
              <IconLayoutGrid stroke={2} color="gray" size={"22px"} />
            </div>
          </div>
        </div>
      </section>
      <div className={view === "grid" ? "view-grid" : ""}>
        {articles.map((item) => {
          return (
            <Link to={`/detalle-articulo/${item.id}`} key={item.id}>
              {view === "list" ? (
                <ArticleItemList item={item} />
              ) : (
                <ArticleItemGrid item={item} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
