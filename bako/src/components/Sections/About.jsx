import React from "react";
import { Link as ScrollLink } from "react-scroll";

const aboutData = {
  cvpath: "media/Shirin Abdollahzadeh - Frontend Developer.pdf",
  image: "images/logo.png",
  name: "Shirin Abdollahzadeh",
  location: "Tehran, Iran",
  degree: "Bachelor's of Software Engineering",
  email: "shiringohariii@gmail.com",
  aboutMe: "This about is also gonna be filled!",
};

function About() {
  return (
    <div className="row">
      <div className="col-md-3">
        <img src={aboutData.image} alt={aboutData.name} />
      </div>
      <div className="col-md-9">
        <h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
        <p className="mb-0">{aboutData.aboutMe}</p>
        <div className="row my-4">
          <div className="col-md-6">
            <p className="mb-2">
              Name: <span className="text-dark">{aboutData.name}</span>
            </p>
            <p className="mb-2">
              Location: <span className="text-dark">{aboutData.location}</span>
            </p>
          </div>
          <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
            <p className="mb-0">
              Degree: <span className="text-dark">{aboutData.birthday}</span>
            </p>
            <p className="mb-0">
              Email: <span className="text-dark">{aboutData.email}</span>
            </p>
          </div>
        </div>
        <a href={aboutData.cvpath} className="btn btn-default mr-3">
          <i className="icon-cloud-download"></i>Download CV
        </a>
        <ScrollLink
          activeClass="active"
          to="section-contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-alt mt-2 mt-md-0 mt-xs-2"
        >
          <i className="icon-envelope"></i>Hire me
        </ScrollLink>
      </div>
    </div>
  );
}

export default About;
