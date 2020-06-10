import React from "react";
import Container from "../components/Container/index";
import Row from "../components/Row/index";
import Navbar from "../components/Navbar/index"
import Footer from "../components/Footer/index"

function Home() {
  return (
    <div>
      <Navbar />
      <Container style={{ marginTop: 30 }}>
      <Row>
          
      </Row>
      </Container>
      <Footer sticky={false}/>
    </div>
  );
}

export default Home;