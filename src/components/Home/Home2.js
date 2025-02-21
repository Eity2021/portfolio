import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Profile_img from "../../Assets/Profile_img.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        


          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.1em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              🚀 With a passion for creating dynamic web applications and a deep
              love for clean and efficient code. My journey into the world of
              web development began in HTML, CSS, Javascript, etc and I
              Completed my study BSC in CSE. Since then, I've been on a constant
              quest to expand my skills and build exciting projects.Currently
              excelling as a Frontend Engineer at Kompass Technology Limited, My
              primary focus lies in the MERN stack, which includes MongoDB,
              Express.js, React, Node.js, and MySQL. I've gained substantial
              expertise in:🤷‍♂️
              <br />
              <br />
         
              💾 MongoDB:
              <i>
                <b className="purple">
            
                  Creating and managing databases, designing efficient data
                  schemas.
                </b>
              </i>
              <br />
          
              🚀 Express.js
              <i>
                <b className="purple">
                  {" "}
                  Building RESTful APIs, handling middleware, and routing.{" "}
                </b>
              </i>
              <br />
            
              ⚛️ React:{" "}
              <i>
                <b className="purple">
                  Developing interactive and responsive user interfaces, and
                  state management with Context API.
                </b>{" "}
              </i>
              <br />
              🌐 Node.js :{" "}
              <i>
                <b className="purple">
                  Building server-side applications, implementing server logic.
                </b>{" "}
              </i>
              <br />
              🌊 MySQL :{" "}
              <i>
                <b className="purple">
                  Building and maintaining relational databases, optimizing
                  queries, and ensuring data integrity.
                </b>{" "}
              </i>
             <div className="margin-top">
               <p>
                I'm well-versed in the latest web development technologies and
                methodologies and am always eager to learn and adapt to emerging
                trends.
              </p>
              <p>
                🌐 You can check out some of my projects on my portfolio page
                where I demonstrate my ability to transform ideas into
                functional, user-friendly web applications.
              </p>
              <p>
                🙌 Thank you for visiting my website! Whether you want to
                collaborate on a project, seek advice, or want to connect, I'm
                excited to hear from you. Let's create amazing web experiences
                together!
              </p></div>
            </p>
          </Col>
          <Col md={4} className="myAvatar ">
            <Tilt>
              <img src={Profile_img} className="img-fluid img" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Eity2021/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/marufa-akter-eity607/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/marufa_akter_eity/d"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
