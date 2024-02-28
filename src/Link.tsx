import React from "react";
import "./App.css";
import linkedin from "./images/linkedin.jpeg";

function Link() {

  const cv_url='https://docs.google.com/document/d/1NZ4K8B3pF8ed-tAzuw9cwt-sQRj1yEgf/export?format=docx';

  return (
    <section id="link" className="text-center">
      <div className="container">
        <h1>Links</h1>
        <a 
          href="https://www.linkedin.com/company/robusoft/about/?viewAsMember=true"
          target="_blank"
          rel="noreferrer"
        >
          <i className="ti-linkedin"></i>
        </a>
        {/* <h4><i className="ti-download"></i> <a href={cv_url} download="cv.docx">Download CV</a></h4> */}
      </div>
      <p className="mt-5">&copy;2024 Robusoft Limited</p>
    </section>
  );
}

export default Link;
