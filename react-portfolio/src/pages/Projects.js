import React from "react";
import Container from "../components/Container/index";
import Row from "../components/Row/index";
import Col from "../components/Col/index";
import Navbar from "../components/Navbar/index"
import Footer from "../components/Footer/index"

function Project() {
  return (
    <div>
      <Navbar />
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
              <Project />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Project />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Project />
          </Col>
      </Row> 
      </Container>
      <Footer sticky={false}/>
    </div>
  );
}

export default Project;