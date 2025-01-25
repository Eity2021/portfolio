import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import {
 
  SiSolidity,
  SiMysql,
} from "react-icons/si";

import { TbBrandGolang } from "react-icons/tb";
import JavaScript from "../../svg/JavaScript";
import Html from "../../svg/Html";
import Figma from "../../svg/Figma";
import Reactj from "../../svg/Reactj";
import Github from "../../svg/Github";
import Ps from "../../svg/Ps";
import Ai from "../../svg/Ai";
import Css from "../../svg/Css";
import BootStrap from "../../svg/BootStrap";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "220px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <JavaScript></JavaScript>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Html />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Figma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Reactj />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Github />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Ps />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Ai />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Css />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BootStrap />
      </Col>

     
  
    </Row>
  );
}

export default Techstack;
