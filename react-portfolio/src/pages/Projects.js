import React, {Component} from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Project from "../components/Project";
import projects from "./projects.json";

class Projects extends Component {
  state = {
    projects
  }
  
  render() {
    return (
      <div>
       
        <Container style={{ marginTop: 30 }}>
          {this.state.projects.map(project=> (
            <Row>
                <Col size="md-12">
                    <Project
                      name={project.name}
                      description={project.description}
                      repo={project.repo}
                      deployed={project.deployed}
                      technologies={project.technologies}
                    />
                </Col>
            </Row>
          ))}   
        </Container>
      </div>
    
    );
  }
}

export default Projects;