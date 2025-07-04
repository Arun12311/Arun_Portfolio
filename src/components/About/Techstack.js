import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiDocker, SiJenkins, SiFlask, SiAmazonaws
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <div className="tech-label">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="tech-label">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="tech-label">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="tech-label">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div className="tech-label">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="tech-label">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <div className="tech-label">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <div className="tech-label">Jenkins</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="tech-label">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <div className="tech-label">Flask</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <div className="tech-label">AWS</div>
      </Col>

 

    </Row>
  );
}

export default Techstack;
