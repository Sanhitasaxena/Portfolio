import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cover from "./components/Cover";
import PrimaryRoutes from "./Routes/PrimaryRoutes";
import "../src/styles/styles.css"

function App() {
  return (
    <div className="App">
     <Header/>
      <PrimaryRoutes/>
      <Cover/>
      {/* <Footer/> */}
     
    </div>
  );
}

export default App;
