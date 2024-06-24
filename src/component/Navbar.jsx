import React from "react";
import { Link } from "react-router-dom";
import { Bio } from "./data/constants";
import { SocialIcon } from "react-social-icons";
import { useRef } from "react";
import Skill from "./screen/Skill";
import Project from "./screen/Project";
import Education from "./screen/Education";
import Contact from "./screen/Contact";
import Footer from "./Footer";
import Home from "./screen/Home";
import CallIcon from "@mui/icons-material/Call";

function Navbar() {
  const about = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  const education = useRef(null);
  const contact = useRef(null);


  const scrollToSection = (elementRef) => {
      window.scrollTo({ 
        top: elementRef.current.offsetTop,
        behavior: 'smooth' });
 };

  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark color-white fixed-top">
        <div className="container">
          <p className="navbar-brand text-light fw-bold" >
            <span className="text-info">{"<"}</span>Manvendra
            <span className="text-info">{"/"}</span>Pratap
            <span className="text-info">{"/"}</span>Singh
            <span className="text-info">{">"}</span>
          </p>
          <button
            className="navbar-toggler border-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
              <li className="nav-item pe-2">
                <Link
                  className="nav-link text-light link-info -hover"
                  aria-current="page"
                  onClick={() => scrollToSection(about)}
                  to="/"
                >
                  About
                </Link>
              </li>
              <li className="nav-item pe-2">
                <Link
                  className="nav-link text-light link-info -hover"
                  onClick={() => scrollToSection(skills)}
                  to="/"
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item pe-2">
                <Link
                  className="nav-link text-light link-info -hover"
                  onClick={() => scrollToSection(projects)}
                  to="/"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item pe-2">
                <Link
                  className="nav-link text-light link-info -hover"
                  onClick={() => scrollToSection(education)}
                  to="/"
                >
                  Education
                </Link>
              </li>
            </ul>
            <div>
              <SocialIcon
                url={Bio.github}
                className="border border-light m-2 rounded-circle text-light"
              />
              <SocialIcon
                url={Bio.linkedin}
                className="border border-light m-2 rounded-circle"
              />
              <CallIcon
                className="text-light ms-2 fs-1 "
                onClick={() => scrollToSection(contact)}
                style={{cursor:'pointer'}}
              />
            </div>
          </div>
        </div>
      </nav>
      <section ref={about} >
        <Home />
      </section>
      <section ref={skills}>
        <Skill />
      </section>
      <hr style={{ color: "white", height: "2rem" }} />
      <section ref={projects}>
        <Project />
      </section>
      <hr style={{ color: "white", height: "2rem" }} />
      <section ref={education}>
        <Education />
      </section>
      <hr style={{ color: "white", height: "2rem" }} />
      <section ref={contact}>
        <Contact />
      </section>
      <section>
      <Footer />
      </section>
    </>
  );
}


export default Navbar;
