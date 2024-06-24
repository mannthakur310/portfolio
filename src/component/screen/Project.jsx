import React from "react";
import Card from "../Card";
import Row from "react-bootstrap/Row";
import { projects } from "../data/constants";
import { useState } from "react";

function Project() {

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterProjects = (category) => {
      setSelectedCategory(category)
    };

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center text-white fs-2 fw-bolder">
          Projects
        </div>
        <div className="d-flex justify-content-center fw-bold text-white my-4">
          Here are some of my projects on which i have been working on for last
          2 years.
        </div>
        <div className="d-flex  justify-content-start justify-content-lg-center ms-lg-0 ms-4 my-4">
        <div className="w-50 btn-group " role="group" aria-label="Basic example">
          <button type="button" className="btn btn-outline-info"   onClick={()=>filterProjects('all')}>
            All
          </button>
          <button type="button" className="btn btn-outline-info"   onClick={()=>filterProjects('frontend')}>
            Frontend
          </button>
          <button type="button" className="btn btn-outline-info"  onClick={()=>filterProjects('full stack')}>
            Full Stack
          </button>
        </div>
        </div>
        <div className=" row ">''
          <div className="col col-grid-3">
            <Row>
              {filteredProjects.map((product) => (
                <Card key={product.id} product={product}/>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
