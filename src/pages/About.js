import React from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import regina from "../assets/images/regina.png";
import Resume from "../components/Card/Resume_Regina.pdf"

function About() {
  return (
    <Container style={{ marginTop: 30, marginBottom:30 }}>
    <div>
      <Row>
        <div className= "col-md-4 d-flex justify-content-center">
        <img src={regina} className=" img-fluid rounded shadow-lg" alt="Profile"/>
        </div>
        <Col size="md-8">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Regina Musovirova</h4>
            <p className="card-text">I'm a new web developer and currently staying in Baltimore,MD.
            I'm a person who has high passion in design technologies, art and web development.
            One of my dreams is to master websites and become one of the TOP web developers in the world,and now I am working toward it!</p>
            <a href="mailto:musovirova@yahoo.com" className="card-link dark-color"><i className="fas fa-envelope fa-5x"></i></a>
            <a href="https://www.linkedin.com/in/regina-musovirova-8b821219a/" className="card-link dark-color"><i className="fab fa-linkedin-in fa-5x"></i></a>
            <a href="https://github.com/antidetka" className="card-link dark-color"><i className="fab fa-github fa-5x"></i></a>
            <a href={Resume} className="card-link dark-color" target="_blank" rel="noopener noreferrer"><i className="fas fa-file fa-5x"></i></a>
          </div>
        </div>
        </Col>
      </Row>
    </div>
    </Container>
  );
}

export default About;
