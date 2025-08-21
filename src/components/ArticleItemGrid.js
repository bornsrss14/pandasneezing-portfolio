import { IconArrowNarrowRight } from "@tabler/icons-react";
export const ArticleItemGrid = ({ item }) => {
  return (
    <div className="full-article-container-grid">
      <div className="date-article">
        <p style={{ fontSize: "1.4rem" }}>{item.dateMonth}</p>
        <p style={{ fontSize: "1.4rem", fontWeight: "700" }}>
          {item.dateNumber > 10 ? item.dateNumber : `0${item.dateNumber}`}
        </p>
      </div>
      <div className="img-article-grid">
        <img
          alt="img-article"
          className="img-full-cover "
          src={item.articleImg}
        />
      </div>
      <div className="article-detailes">
        <div style={{ display: "flex", flexDirection: "column", gap: ".4rem" }}>
          <h2>{item.title}</h2>
          <p>{`${item.minutesRead} min read`}</p>
          <div className="flex-row">
            {item.categories.map((cat, key) => {
              return <p key={`${item}key`}>{cat}</p>;
            })}
          </div>
        </div>

        <div className="brief-description">
          <p>
            esto es un pequeño asod sadionas asdnads adsjks ajskdn asojasds
            asdsadinasdndsknsao sadoidas pequeño asod sadionas asdnads adsjks
            ajskdn asojasds asdsadinasdndsknsao sadoidas
          </p>
        </div>
        <div className="enlace ">
          <p> View Details</p>
          <IconArrowNarrowRight stroke={"1px"} size={"18px"} />
        </div>
      </div>
    </div>
  );
};

export default ArticleItemGrid;
