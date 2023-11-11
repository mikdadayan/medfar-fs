import React from "react";
import Navbar from "../components/common/navbar/navbar";
import Footer from "../components/common/footer/footer";
import Main from "../components/main/main";
import "./App.scss";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};
export default App;
