import React from "react";
import About from "./components/About/About";
import MyCarousel from "./components/carousel/carousel";
import Experience from "./components/experience/Experience";
import Footer from "./components/Footer/Footer";
// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import TitleMessage from "./components/title-msg/title-msg";
import PrimaryRoutes from "./Routes/PrimaryRoutes";
// import "../src/styles/styles.css"

function App() {
  return (
    <div className="App" id="containerApp">
     <Header/>
     <MyCarousel/>
     <TitleMessage/>
     {/* <About/> */}
     <Projects/>
     <Skills/>
     <Experience/>
     <Footer/>
      <PrimaryRoutes/>
      
      {/* <Footer/> */}
     
    </div>
  );
}

export default App;
