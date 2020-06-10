import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Front from "../components/Front";

function About() {
  return (
    <div>
      <Front backgroundImage="">
        <h1>Portfolio</h1>
      </Front>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About me!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            Hi! Welcome to my mini portfolio website!My name is Regina!I am a new web developer and currently staying in Baltimore,MD.
            I am a person who has high passion in design technologies, art and web development.
            One of my dreams is to master websites and become one of the TOP web developers in the world,and now I am working toward it!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
