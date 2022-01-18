import React from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faInstagram, faVk } from '@fortawesome/free-brands-svg-icons';
import './app-header.css';

const AppHeader = () => {
  return(
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container className="d-flex justify-content-between">
        <Row>
          <Col md={3} xs={5}>
            <Navbar.Brand className="brand-css">
              Ger→m
            </Navbar.Brand>
          </Col>
          <Col md={8} xs={3}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Col>
            <Nav.Link href="/home">Home</Nav.Link>
          </Col>
          <Col>
            <Nav.Link href="#services">Services</Nav.Link>
          </Col>
          <Col>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          </Col>
          <Col>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Col>
          </Nav>
          </Navbar.Collapse>
          </Col>
          <Col md={1} xs={4}>
          <Navbar.Collapse id="responsive-navbar-nav" className="icon-css">
          <Col>
            <Nav.Link href="https://www.facebook.com/constance.german" target="_blank" title="facebook"><FontAwesomeIcon icon={faFacebook} className="social-icon" /></Nav.Link>
          </Col>
          <Col>
            <Nav.Link href="https://www.instagram.com/constancegerman/" target="_blank" title="instagram"><FontAwesomeIcon icon={faInstagram} className="social-icon" /></Nav.Link>
          </Col>
          <Col>
            <Nav.Link href="https://vk.com/constancegerman" target="_blank" title="vk"><FontAwesomeIcon icon={faVk} className="social-icon" /></Nav.Link>
          </Col>
          </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
