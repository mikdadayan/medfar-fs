import React from "react";
import Navbar from "../components/common/navbar/Navbar.component";
import Footer from "../components/common/footer/Footer.component";
import MainComponent from "../components/main/Main.component";
import "./App.scss";

export default function App() {
  return (
    <>
      <Navbar />
      <MainComponent />
      <Footer />
    </>
  );
}
