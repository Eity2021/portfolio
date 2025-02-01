import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import CarouselSlider from "./CarouselSlider";
export default function ProjectsDetailsModal(props) {
  const [project, setProject] = useState([]);

  const projectArray = project.reduce((acc, obj) => ({ ...acc, ...obj }), {});

  // console.log("projectArray", projectArray);
  const { id, description, gitLink, allImages, languageInfo, name, liveLink } =
    projectArray;
  useEffect(() => {
    axios
      .get(`https://portfolio-backend-nu-dusky.vercel.app/projects/${props.id}`)
      .then((response) => {
        setProject(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [props.id]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{ background: "rgb(20 15 35)"}}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ color: "#fff" }}
        >
          Project - {id}
        </Modal.Title>
      </Modal.Header>

      <CarouselSlider allImages={allImages}> </CarouselSlider>

      <Modal.Body style={{ background: "rgb(20 15 35)" }}>
        <h4 style={{ color: "#fff", fontWeight: "bold" }}> {name} ....</h4>
        <p style={{ color: "#fff" }}>
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            Project Description
          </span>{" "}
          : {description}
        </p>
        <p style={{ color: "#fff" }}>
          {/* <span style={{fontSize:'18px' , fontWeight:'bold' ,paddingBottom:'20px'}}>Use </span> :  */}

          {languageInfo?.map((info) => (
            <ul key={info.id}>
              <li>{info}</li>
            </ul>
          ))}
        </p>

        {gitLink && (
          <Button
            variant="primary"
            href={gitLink}
            target="_blank"
            style={{ width: "200px" }}
          >
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}
        {liveLink && (
          <Button
            variant="primary"
            href={liveLink}
            target="_blank"
            style={{ marginLeft: "10px", width: "200px" }}
          >
            <CgWebsite /> &nbsp; Live
          </Button>
        )}
      </Modal.Body>

      <Modal.Footer style={{ background: "rgb(20 15 35)" }}>
        <Button onClick={props.onHide} style={{ color: "#fff" }}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
