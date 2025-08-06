import PortfolioFolderLayout from "../components/PortfolioFolderLayout";
import Folder from "../core/Folder";

export const Home = () => {
  return (
    <>
      <section className="grid-section-projects">
        <></>
        <div>
          <div className="flex-row">
            <p>#HTML</p>
            <p>#CSS</p>
          </div>
          <div className="flex-row">
            <p>#JavaScript</p>
            <p>#React</p>
          </div>
          <div className="flex-row">
            <p>#SQL</p>
            <p>#Java</p>
          </div>
          <div className="flex-row">
            <p>#Figma</p>
            <p>#SQL</p>
            <p>#Java</p>
          </div>
        </div>
        <PortfolioFolderLayout />
      </section>
    </>
  );
};

export default Home;
