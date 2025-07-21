import React from "react";
import { Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Profile_img.png";

import Type from "./Type";
import SocialMedia from "./socialMedia/SocialMedia";
import { useNavigate } from "react-router";
function Home() {
    let navigate = useNavigate();

    const handlePortfolio = () => {
      navigate('/project')
    }
  return (
    <section>
      <Row style={{ height: "100vh", width: "100vw" , background:"#0c0c0c"}}>

        <Col md={6} className="home-header">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              width: "100%",
              gap: "100px",
            }}
          >
            <div style={{ paddingLeft: "30px" }}>
              <SocialMedia></SocialMedia>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <div>
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Marufa Akter Eity</strong>
                </h1>
                <div>
                  <Type />
                </div>
                <div style={{ marginTop: "20px" }}>
                  <p style={{ color: "#fff", fontSize: "16px" }}>
                    Passionate frontend developer crafting dynamic web apps{" "}
                    <br />
                    with clean code,MERN stack expertise, and a drive for <br />
                    continuous learning.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div><button style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '6px', paddingBottom: '6px', border: 'none', fontWeight: 'medium' }} onClick={handlePortfolio}>My Portfolio</button></div>
                  <div><button style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '6px', paddingBottom: '6px', border: '1px solid #fff', background: 'none', color: '#fff' }}>  <a style={{color: '#fff'}} href="https://drive.google.com/file/d/1oZukkhD8kNfY1e88Na1YE9sNPG4ei-F1/view" target="_blank">Resume</a></button></div>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <img
            src={homeLogo}
            alt="home pic"
            // className="img-fluid"
            style={{ width: "100%", height: "100vh",borderTop:'12px solid #0c0c0c',borderBottom:'12px solid #0c0c0c'}}
          />
        </Col>
      </Row>
    </section>
  );
}

export default Home;
