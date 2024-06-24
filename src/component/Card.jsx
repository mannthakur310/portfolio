import React from "react";
import { useState } from "react";

function Card({ product }) {
  const [expandedProject, setExpandedProject] = useState(null);
  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <>
      <div
        className="card bg-dark mt-3 border border-light me-5"
        style={{ width: "18rem" }}
      >
        <img
          src={product.image}
          className="card-img-top rounded mt-2 border border-info"
          style={{height:'11rem'}}
          alt="..."
        />
        <div className="card-body">
          <div className="card-text">
            {product.tags.map((tagitem) => {
              return (
                <button
                  className="btn btn-info text-dark rounded-pill me-1 fw-bolder"
                  key={tagitem}
                  style={{ fontSize: "7px" }}
                >
                  {tagitem}
                </button>
              );
            })}
          </div>
          <div>
            <h4 className="text-light mt-2 fw-bold">{product.title}</h4>
            <p className="text-secondary">
              {" "}
              {expandedProject === product.id
                ? product.description
                : `${product.description.substring(0, 100)}...`}
            </p>
            <button className="btn btn-outline-light rounded" style={{fontSize:'15px'}} onClick={() => toggleExpand(product.id)}>
              {expandedProject === product.id ? "Show less" : "Read more"}
            </button>
            <a href={product.webapp} type="button" className="btn btn-outline-info ms-2" style={{height:'2rem', width:'4rem'}}>Visit</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
