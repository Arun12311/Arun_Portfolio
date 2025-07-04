import React from "react";
import { Col, Row } from "react-bootstrap";


import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiVercel,
  SiNetlify,
} from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="tech-label">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div className="tech-label">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <div className="tech-label">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <div className="tech-label">Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <div className="tech-label">Netlify</div>
      </Col>

    </Row>
  );
}


export default Toolstack;
