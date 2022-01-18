import React from 'react';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import './app-footer.css';

const AppFooter = () => {
  return(
      <Container fluid className="app-footer">
          <Navbar.Toggle aria-controls="mr-auto" />
          <Row>
            <Col>
            <Nav className="flex-column">
                <Nav.Link href="/home" className="home-css">Home</Nav.Link>
                <Nav.Link href="#services" className="link-css">Services</Nav.Link>
                <Nav.Link href="#portfolio" className="link-css">Portfolio</Nav.Link>
                <Nav.Link href="#contact" className="link-css">Contact</Nav.Link> 
            </Nav>
            </Col>
            <Col>
              <p>Phone:
              <p>+373-68-041-683</p>
              <p>Email:
              <p>constancegerman@gmail.com</p></p></p>
            </Col>
            <Col>
                <p>All rights reserved.</p>
                <p>Copyright 2021 © German C.</p>
            </Col>
          </Row>
      </Container>
  );
}

export default AppFooter;



