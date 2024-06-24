import React from "react";
import { SocialIcon } from "react-social-icons";
import { Bio } from "./data/constants";

function Footer() {
  return (
    <div className="bg-dark mt-5">
      <div className="d-flex justify-content-center text-info mb-4">
        <h6 className="mt-4 fw-bold">Manvendra Pratap Singh</h6>
      </div>
      <div className="d-flex justify-content-center text-info mb-4 align-items-center">
        <SocialIcon className="m-2" url={Bio.github} />
        <SocialIcon className="m-2" url={Bio.insta} />
        <SocialIcon className="m-2" url={Bio.linkedin} />
        <SocialIcon className="m-2" url={Bio.twitter} />
        <a href='https://codeforces.com/profile/mannpratap310'>
          <img
            src="https://th.bing.com/th/id/OIP.6OCfHi_r2a_OQ-P3uHfRXwAAAA?rs=1&pid=ImgDetMain"
            alt="Codeforces"
            style={{ width: "2rem", height: "2rem" }}
            className="rounded-circle m-2 "
          />
        </a>
        <a href='https://www.codechef.com/users/mannpratap310'>
          <img
            src="https://media-exp1.licdn.com/dms/image/C561BAQFsy8_Lq5biWg/company-background_10000/0/1605423934732?e=2159024400&v=beta&t=ysHse46hfiZaYDN2FwKiGvn9uKFbAQuyu_gjPj5PVHA"
            alt="Codechef"
            style={{ width: "2rem", height: "2rem" }}
            className="rounded-circle m-2 bg-light"
          />
        </a>
      </div>
      <div className="d-flex justify-content-center text-secondary">
        <p className="ms-2">©2024ManvendraPratapSingh.All right reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
