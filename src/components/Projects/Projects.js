import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import OAuth from "../../Assets/Projects/OAuth.png";
import TinDog from "../../Assets/Projects/TinDog.png";
import PicBlast from "../../Assets/Projects/PicBlast.png";
import movie from "../../Assets/Projects/movie.png";
import Keeper from "../../Assets/Projects/Keeper.png";
import soldier_monitoring from "../../Assets/Projects/soldier_monitoring.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soldier_monitoring}
              title="Soldier Monitoring System"
              description="The Soldier Health Monitoring and Position Tracking System allows the military personnel to track the current GPS position of a soldier and also checks the health status including body temperature and heartbeat of a soldier."
              ghLink="https://github.com/Arun12311/Soldier_Monitoring_System/tree/main"
              demoLink="https://github.com/Arun12311/Soldier_Monitoring_System/blob/main/Photos/final%20implementations/Final%20Implementation.PNG"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              title="Movie Booking Site"
              description="This is a MERN project of movie booking application. it is build with react.js, HTML and CSS. Have features which allows user for booking new movies by logging to website."
              ghLink="https://github.com/Arun12311/Movie_booking_site"
              demoLink="https://movie-booking-site07.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PicBlast}
              title="PicBlast"
              description="It is a website similar which is similar to Instagram. It is created using React.js , HTML and CSS. PicBlast is a website that allows users to share and view photos with friends and followers. Similar to Instagram, PicBlast has a visually-driven interface where users can upload and share their own photos."
              ghLink="https://github.com/Arun12311/PicBlast"
              demoLink="https://picblast.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OAuth}
              title="OAuth 2.0 Website"
              description="It is a simple secrects keeping website buit with the help of HTML ,CSS ,Node.js , MongoDB and Express.js . It has Open Authorization 2.0 enabled using Passport.js , which also includes Google authentication.."
              ghLink="https://github.com/Arun12311/OAuth_2.0_Secrets_website"
              demoLink="https://user-images.githubusercontent.com/108878412/215697745-986c6810-37d2-41bc-99be-c6ccfc2aca3a.PNG"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Keeper}
              title="Keeper App"
              description="The 'Keeper Website' is a dynamic and user-friendly web application designed to help users organize and manage their notes in a digital format. Built using the React framework, this project offers an efficient and responsive platform for creating, editing, and deleting notes seamlessly.It is made up of React Framework."
              ghLink="https://github.com/Arun12311/KEEPER_APP"
              demoLink="https://notesgen.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TinDog}
              title="TinDog Old Website"
              description="This is the clone of Old TinDog Website which is not available today. It is made plain HTML and Bootstrap and CSS."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://arun12311.github.io/TinDog_Old_Site/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
