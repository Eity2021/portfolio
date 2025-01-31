import React , { useState,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import axios from 'axios';

function Projects() {


  const [portfolio,setPortfolio] = useState([]);

  
  useEffect(() => {
    axios.get("https://portfolio-backend-nu-dusky.vercel.app/projects")
      .then((response) => {
        setPortfolio(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My All <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          { 
      portfolio.map((project) => (
        <Col md={4} className="project-card">
        <ProjectCard key={project.id} project={project}/>
        </Col>
      ))

      }
           
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
