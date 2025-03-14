import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
// import { FaGithub } from "react-icons/fa";
import { MdMore } from "react-icons/md";
import ProjectsDetailsModal from "./ProjectsDetailsModal";

function ProjectCards(project) {
  const [modalShow, setModalShow] = useState(false);
  const { name, image, description, liveLink, gitLink, id } = project.project;
  // console.log('project', project.name);
  const navigateId = (id) => {
    setModalShow(id);
    setModalShow(true);
  };
  const descriptionPreview = description
    ? description.split(" ").slice(0, 18).join(" ") +
      (description.split(" ").length > 18 ? "..." : "")
    : "";

  return (
    <div>
      <Card className="project-card-view"  onClick={() => navigateId(id)} style={{cursor:'pointer'}}>
        <Card.Img
          variant="top"
          src={image}
          alt="card-img"
          style={{ height: "310px", width: "100%" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {descriptionPreview}
          </Card.Text>
          {gitLink && (
            <Button variant="primary" href={gitLink} target="_blank">
              <BsGithub /> &nbsp; GitHub
            </Button>
          )}
          {liveLink && (
            <Button
              variant="primary"
              href={liveLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp; Live
            </Button>
          )}
          <Button
            variant="primary"
            style={{ marginLeft: "10px" }}
            onClick={() => navigateId(id)}
          >
            <MdMore /> &nbsp; More..
          </Button>
        </Card.Body>
      </Card>
      <ProjectsDetailsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={id}
      />
    </div>
  );
}
export default ProjectCards;
