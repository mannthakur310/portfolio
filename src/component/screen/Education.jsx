import React from "react";
import { education } from "../data/constants";
import './education.css'
function Education() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center text-white fs-2 fw-bolder">
        Education
      </div>
      <div className="d-flex justify-content-center fw-bold text-white my-4">
        My education has been a journey of self-discovery and growth.My
        education details are as follow
      </div>
      <section>
        <div className="container py-5">
          <div className=" timeline">
            <div className="timeline-row">
              <div className="timeline-time text-light">
                <img src={education[0].img} alt=".."
                style={{width:'2rem' ,height:'2rem'}} 
                className="rounded-circle me-2"
                />
                {`(2022-2026)`}
              </div>
              <div className="timeline-content row">
                <div
                  className="card bg-dark border border-light p-3 w-100 col col-sm-12 ms-4"
                >
            
                    <div className="card-body">
                      <h5 className=" text-light fw-bold">{education[0].school}</h5>
                      <p className="text-secondary ">{education[0].degree}</p>
                      <p className="text-secondary">{education[0].date}</p>
                    </div>
                  
                  <div>
                    <p className="mb-2 text-light">
                      <span className="fw-bold">Grade :</span>{" "}
                      {education[0].grade}
                    </p>
                    <p className="mb-0 text-secondary">{education[0].desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-row">
              <div className="timeline-time text-light">
              <img src={education[1].img} alt=".."
                style={{width:'2rem' ,height:'2rem'}} 
                className="rounded me-2"
                />
                {`(2021-2022)`}
              </div>
              <div className="timeline-content">
                <div
                  className="card bg-dark border border-light p-4 w-100 col col-sm-12 me-5"
                  style={{ width: "25rem" }}
                >
                    <div className="card-body ">
                      <h5 className=" text-light fw-bold">{education[1].school}</h5>
                      <p className="text-secondary ">{education[1].degree}</p>
                      <p className="text-secondary">{education[1].date}</p>
                    </div>
                  
                  <div>
                    <p className="mb-2 text-light">
                      <span className="fw-bold">Grade :</span>{" "}
                      {education[1].grade}
                    </p>
                    <p className="mb-0 text-secondary">{education[1].desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-row ">
              <div className="timeline-time text-light">
              <img src={education[2].img} alt=".."
                style={{width:'2rem' ,height:'2rem'}} 
                className="rounded me-2"
                />
                {`(2019-2020)`}
              </div>
              <div className="timeline-content">
                <div
                  className="card bg-dark border border-light p-4 w-100 col col-sm-12 ms-5"
                  style={{ width: "25rem" }}
                >
                    <div className="card-body">
                      <h5 className=" text-light fw-bold">{education[2].school}</h5>
                      <p className="text-secondary ">{education[2].degree}</p>
                      <p className="text-secondary">{education[2].date}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-light">
                      <span className="fw-bold">Grade :</span>{" "}
                      {education[2].grade}
                    </p>
                    <p className="mb-0 text-secondary">{education[2].desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
