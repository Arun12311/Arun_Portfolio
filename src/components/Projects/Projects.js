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
import edaPcos from "../../Assets/Projects/edaPcos.png";
import chatAppImg from "../../Assets/Projects/chatAppImg.png";
import socialLinksImg from "../../Assets/Projects/socialLinksImg.png";
import accessGridImg from "../../Assets/Projects/accessGridImg.jpg";

// 1. Define your categories
const categories = [
  { key: "fullstack", label: "Full‑Stack & Real‑Time" },
  { key: "data", label: "Data / ML" },
  { key: "frontend", label: "Frontend Designs" },
  { key: "react", label: "React Apps" },
  { key: "other", label: "Other" },
];

// 2. Define your projects with a category field
const projects = [
  {
    imgPath: accessGridImg,  // Replace with your actual screenshot (dashboard overview or monitoring UI)
    title: "AccessGrid – GPU/CPU Monitoring & User Management",
    description: "A Flask‑based dashboard to monitor live GPU/CPU stats across multiple servers, manage users (create, delete, search, flag inactivity), and analyze/upload GPU usage CSVs with historical charts and downloadable reports. Features responsive UI, interactive visuals, and server‑wide overview.",
    ghLink: "https://github.com/ArunSadalgekar07/minor-project",
    demoLink: "",  // Add a live demo URL or link to setup instructions/screenshots if available
    category: "fullstack",
  }
  ,
  {
    imgPath: edaPcos,
    title: "EDA on PCOS Dataset",
    description: "Exploratory Data Analysis on a Polycystic Ovary Syndrome dataset from Kaggle — uncovering key correlations, feature distributions, and cluster patterns to better understand risk factors.",
    ghLink: "https://github.com/ArunSadalgekar07/EDA-on-PCOS-Dataset",
    demoLink: "https://sites.google.com/view/aruneda/home",
    category: "data",
  },
  {
    imgPath: soldier_monitoring,
    title: "Soldier Monitoring System",
    description: "The Soldier Health Monitoring and Position Tracking System allows the military personnel to track the current GPS position of a soldier and also checks the health status including body temperature and heartbeat of a soldier.",
    ghLink: "https://github.com/Arun12311/Soldier_Monitoring_System/tree/main",
    demoLink: "https://github.com/Arun12311/Soldier_Monitoring_System/blob/main/Photos/final%20implementations/Final%20Implementation.PNG",
    category: "fullstack",
  },
  {
    imgPath: movie,
    title: "Movie Booking Site",
    description: "This is a MERN project of movie booking application. it is build with react.js, HTML and CSS. Have features which allows user for booking new movies by logging to website.",
    ghLink: "https://github.com/Arun12311/Movie_booking_site",
    demoLink: "https://movie-booking-site07.netlify.app/",
    category: "fullstack",
  },
  {
    imgPath: chatAppImg,  // Use your Chat-app-MERN screenshot/icon here
    title: "संवाद – Real-Time MERN Chat App",
    description: "संवाद is a full‑stack MERN chat app featuring real‑time messaging, group chats, push notifications, AI‑chatbot, and embedded mini‑games (Hangman & Tic Tac Toe). Built with React, Node.js, MongoDB, Socket.io and Material‑UI for a seamless, interactive experience.",
    ghLink: "https://github.com/ArunSadalgekar07/Chat-app-MERN",
    demoLink: "https://arun12311.github.io/Chat-Web-App-Home-Page/",
    category: "fullstack",
  }
  ,
  {
    imgPath: PicBlast,
    title: "PicBlast",
    description: "It is a website similar which is similar to Instagram. It is created using React.js , HTML and CSS. PicBlast is a website that allows users to share and view photos with friends and followers. Similar to Instagram, PicBlast has a visually-driven interface where users can upload and share their own photos.",
    ghLink: "https://github.com/Arun12311/PicBlast",
    demoLink: "https://picblast.netlify.app/",
    category: "react",
  },
  {
    imgPath: OAuth,
    title: "OAuth 2.0 Website",
    description: "It is a simple secrects keeping website buit with the help of HTML ,CSS ,Node.js , MongoDB and Express.js . It has Open Authorization 2.0 enabled using Passport.js , which also includes Google authentication..",
    ghLink: "https://github.com/Arun12311/OAuth_2.0_Secrets_website",
    demoLink: "https://user-images.githubusercontent.com/108878412/215697745-986c6810-37d2-41bc-99be-c6ccfc2aca3a.PNG",
    category: "fullstack",
  },
  {
    imgPath: Keeper,
    title: "Keeper App",
    description: "The 'Keeper Website' is a dynamic and user-friendly web application designed to help users organize and manage their notes in a digital format. Built using the React framework, this project offers an efficient and responsive platform for creating, editing, and deleting notes seamlessly.It is made up of React Framework.",
    ghLink: "https://github.com/Arun12311/KEEPER_APP",
    demoLink: "https://notesgen.netlify.app/",
    category: "react",
  },
  {
    imgPath: TinDog,
    title: "TinDog Old Website",
    description: "This is the clone of Old TinDog Website which is not available today. It is made plain HTML and Bootstrap and CSS.",
    ghLink: "https://github.com/soumyajit4419/Face_And_Emotion_Detection",
    demoLink: "https://arun12311.github.io/TinDog_Old_Site/",
    category: "frontend",
  },
  {
    imgPath: socialLinksImg,  // Use a screenshot of your social links profile here
    title: "Social‑Links Profile",
    description: "A minimalist, responsive personal profile page built with HTML5 & CSS3 — showcasing social media links. Designed as a Frontend Mentor challenge, it emphasizes semantic markup, hover/focus states, and mobile-first responsiveness.",
    ghLink: "https://github.com/ArunSadalgekar07/Social-links-profile",
    demoLink: "https://arunsadalgekar07.github.io/Social-links-profile/",
    category: "frontend",
  },

  // Add more projects as needed, assigning them to the right category
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ fontSize: "2.8rem", letterSpacing: "2px" }}>
          <span role="img" aria-label="rocket">🚀</span> My <strong className="purple">Code Quests</strong> <span role="img" aria-label="sparkles">✨</span>
        </h1>
        <p
          className="project-subheading"
          style={{
            color: "#b39ddb",
            marginBottom: "35px",
            fontSize: "1.25rem",
            fontStyle: "italic",
            textShadow: "0 2px 8px #2e085f44"
          }}
        >
          Dive into a gallery of <span style={{ color: "#c770f0", fontWeight: "bold" }}>imagination</span> and <span style={{ color: "#c770f0", fontWeight: "bold" }}>innovation</span>.<br />
          <span role="img" aria-label="lightbulb">💡</span> Every project is a new adventure—discover the code, creativity, and challenges behind each milestone!
        </p>


        {categories.map((cat) => {
          const catProjects = projects.filter((p) => p.category === cat.key);
          if (catProjects.length === 0) return null;
          return (
            <div key={cat.key}>
              <h2 className="project-category">{cat.label}</h2>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                {catProjects.map((project, idx) => (
                  <Col md={4} className="project-card" key={project.title + idx}>
                    <ProjectCard {...project} />
                  </Col>
                ))}
              </Row>
            </div>
          );
        })}
      </Container>
    </Container>
  );
}

export default Projects;
