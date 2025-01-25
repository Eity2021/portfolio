import React from "react";
import { Container, Row, Col, InputGroup } from "react-bootstrap";
import Particle from "../Particle";
import Email from "../../svg/Email";
import Phone from "../../svg/Phone";
import Address from "../../svg/Address";

export default function ContactMe() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container className="padding">
      <h1 className="project-heading " style={{marginBottom:"70px", borderBottom:"1px solid #f1f1f1", paddingBottom:"20px"}}>
      CONTACT <strong className="purple">Me </strong>
        </h1>
        <Row style={{ justifyContent: "center", padding: "10px",marginBottom:"170px" }}>
          <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{
                fontSize: "1.7em",
                paddingBottom: "10px",
                textAlign: "left",
              }}
            >
              CONTACT INFO
            </h1>

            <p style={{ textAlign: "justify" }}>
            <span><Email></Email> </span>  Email : eity2021akter@gmail.com
              <br />
              <span><Phone></Phone> </span>Phone : +8801931382607 , +8801825897301
              <br />
             
              <span><Address></Address> </span>Address : West Rampura , Dhaka 1229, Bangladesh
            </p>
          </Col>
          <Col
            md={6}
            style={{ paddingTop: "30px", paddingBottom: "50px" }}
            className="about-img"
          >
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
