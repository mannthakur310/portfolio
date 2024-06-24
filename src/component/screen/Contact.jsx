import React from "react";
import { useForm } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("meojjgbb");
  if (state.succeeded) {
    return <p className="text-light d-flex justify-content-center" >Thanks for joining!</p>;
  }
  return (
    <div>
      <div className="d-flex justify-content-center text-white fs-2 fw-bolder">
        Contact
      </div>
      <div className="d-flex justify-content-center fw-bold text-white my-4 ms-2">
        Feel free to reach out to for any questions or opportunities!
      </div>
      <div
        className="container w-50 border border-light rounded"
        style={{ backgroundColor: "#272e48" }}
      >
        <div className="m-2 fw-bold text-info">
          <h4>Email Me</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-light">
            <input
              name="username"
              type="text"
              className="form-control rounded bg-light text-dark border border-info"
              id="exampleFormControlInput1"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-3 ">
            <input
              name="userEmail"
              type="email"
              className="form-control rounded bg-light text-dark border border-info"
              id="exampleFormControlInput1"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-3 ">
            <input
              name="Subject"
              type="text"
              className="form-control rounded bg-light text-dark border border-info"
              id="exampleFormControlInput1"
              placeholder="Subject"
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              placeholder="Message"
              className="form-control rounded bg-light text-dark border border-info"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-info rounded w-100 p-2 mb-2 text-light fw-bold"
            disabled={state.submitting}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
