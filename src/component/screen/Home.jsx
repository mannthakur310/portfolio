import React from "react";
import { Bio } from "../data/constants";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import resume from "../../assert/Resume.pdf";
import './home.css'

function Home() {
  return (
    <>
      <div
        className="container-fluid d-sm-inline-flex center-lg mt-lg-0"
        style={{ height: "100vh",marginTop:'8rem'}}
      >
        <div className="text-white me-5 w-lg-50 w-100">
          <div className="fs-1 fw-bolder">Hi,I am</div>
          <div className="fs-1 fw-bolder">{Bio.name}</div>
          <div className="fs-5 fw-bold mb-2 d-flex">
            I am a
            <span className="text-success ms-1">
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className="d-sm-inline-flex">{Bio.description}</div>
          <Link
            className="btn btn-info btn-gradient rounded-pill mt-4 p-2"
            to={resume}
            target="blank"
            download
          >
            Download Resume
          </Link>
        </div>
        <div style={{ width: "14rem" }} >
          <img
            src="image.jpg"
            className="card-img-top img-fluid rounded-circle  mt-lg-0 mt-5 ms-lg-0 ms-5"
            alt="..."
          />
        </div>
      </div>
    </>
  );
}

export default Home;
