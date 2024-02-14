import React from "react";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <nav
        id="scrollspy"
        className="navbar page-navbar navbar-dark bg-dark navbar-expand-md fixed-top"
        data-spy="affix"
        data-offset-top="20"
      >
        <div className="container">
          <a className="navbar-brand" href="https://geronimoalcantara.github.io/Robusoft/">
            <strong className="text-primary">ROBUSOFT</strong>{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link navbar-toggler" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-toggler" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-toggler" href="#content">
                  Mission
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-toggler" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-toggler" href="#feature">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-toggler" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-toggler" href="#link">
                  Links
                </a>
              </li>
            </ul>
            <ToastContainer/>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
