import logo from "./logo.svg";
import "./App.css";
import PostIt from "./core/PostIt";
import Folder from "./core/Folder";
import PortfolioFolderLayout from "./components/PortfolioFolderLayout";

function App() {
  return (
    <div className="flex_R">
      {/* <PostIt>💡 Recordar subir el CV</PostIt>
      <PostIt color="bg-pink-200">📌 Terminar la Pokedex</PostIt>
      <PostIt color="bg-green-200">🚀 Publicar portafolio</PostIt> */}

      <PortfolioFolderLayout />
      {/* <Folder label="CV PDF" color="#A5F3FC" />
      <Folder label="Notas Legales" color="#C4B5FD" />
      <Folder label="Pokedex" color="#FFD6C2" />
      <Folder label="Notaría 9" color="#FFF9C4" />
      <Folder label="To-do list" color="#D8D2FF" />
      <Folder label="MUBI::" color="#D2F8D2" />
      <Folder label="Hiking Map" color="#FFCCE5" /> */}
    </div>
  );
}

export default App;
