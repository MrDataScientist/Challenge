import React from "react";
import DicomTextFile from "./DicomFilesList";
import FooterPage from "./Footer/footer";
import "./App.css";

function Main() {
  return (
      <div> 
        <DicomTextFile />
        <FooterPage />
      </div>
  );
}

export default Main;
