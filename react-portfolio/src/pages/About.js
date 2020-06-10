import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Pupster</h1>
        <h2>They're the Good Boys and Girls</h2>
      </Hero>
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
