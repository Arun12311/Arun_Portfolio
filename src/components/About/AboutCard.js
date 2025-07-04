import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arun Gopal Sadalgekar </span>
            from <span className="purple"> Belgaum, India.</span>
            <br /> I am a final year student pursuing B.E. 
            in Computer Science and Engineering at KLE Technological University, Belagavi.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Play Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You are Stronger than you Think!"{" "}
          </p>
          <footer className="blockquote-footer">Arun S.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
