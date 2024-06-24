import React from "react";
import { skills } from "../data/constants";

function Skill() {
  return (
    <>
      <div className="container-fluid " >
        <div className="d-flex justify-content-center text-white fs-2 fw-bolder" >
          Skills
        </div>
        <div className="d-flex justify-content-center fw-bold text-white my-4">
          Here are some of skills on which i have been working on for last 2
          years.
        </div>
        <div className="row d-flex justify-content-center ">
          <div className="border border-light bg-dark text-white col col-lg-3 m-3 rounded col-md-6 col-sm-12">
            <div className="row">
              <div className="d-flex  align-items-center justify-content-center">
                <p className="fs-4 mt-2 text-info fw-bold">{skills[0].title}</p>
              </div>
              {skills[0].skills.map((item) => {
                return (
                  <div className="d-flex text-white col col-lg-4 rounded col-md-6 col-sm-12 m-3" key={skills[0].title}>
                    <img
                      src={item.image}
                      alt="..."
                      style={{ height: "2rem", width: "2rem" }}
                    />
                    <p className="fs-6 ms-1">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border bg-dark border-light text-white rounded col col-lg-3 m-3 col-md-6 col-sm-12">
            <div className="row">
              <div className="d-flex align-items-center justify-content-center">
                <p className="fs-4 mt-2 text-info fw-bold">{skills[1].title}</p>
              </div>
              {skills[1].skills.map((item) => {
                return (
                  <div className=" d-flex  text-white col col-lg-4 rounded col-md-6 col-sm-12 m-3" key={skills[1].title}>
                    <img
                      src={item.image}
                      alt="..."
                      style={{ height: "2rem", width: "2rem" }}
                    />
                    <p className="fs-6 m-2">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border bg-dark border-light text-white rounded col col-lg-3 m-3 col-md-6 col-sm-12">
            <div className="row">
              <div className="d-flex align-items-center justify-content-center">
                <p className="fs-4 mt-2 text-info fw-bold">{skills[2].title}</p>
              </div>
              {skills[2].skills.map((item) => {
                return (
                  <div className="d-flex  text-white col col-lg-4 rounded col-md-6 col-sm-12 m-3" key={skills[2].title}>
                    <img
                      src={item.image}
                      alt="..."
                      style={{ height: "2rem", width: "2rem" }}
                    />
                    <p className="fs-6 m-2">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
