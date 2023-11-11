import React from "react";
import Navbar from "../components/common/navbar/navbar";
import Footer from "../components/common/footer/footer";
import MainComponent from "../components/main/Main.component";
import "./App.scss";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <MainComponent />
      <Footer />
    </>
  );
};
export default App;
