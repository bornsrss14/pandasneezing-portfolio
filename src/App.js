import logo from "./logo.svg";
import "./App.css";
import PostIt from "./core/PostIt";
import Folder from "./core/Folder";
import PortfolioFolderLayout from "./components/PortfolioFolderLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import ContactForm from "./pages/ContactForm";
import AboutMe from "./pages/AboutMe";
import UiComponents from "./pages/UiComponents";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/ui-components" element={<UiComponents />}></Route>
          <Route path="/about-me" element={<AboutMe />}></Route>
          <Route path="/contact" element={<ContactForm />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Articles />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
{
  /*  
  
  <div className="flex_R">
  {/* <PostIt>💡 Recordar subir el CV</PostIt>
      <PostIt color="bg-pink-200">📌 Terminar la Pokedex</PostIt>
      <PostIt color="bg-green-200">🚀 Publicar portafolio</PostIt> 

     
    </div>
    */
}
