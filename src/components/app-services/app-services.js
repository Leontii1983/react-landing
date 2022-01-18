import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCameraRetro, faDraftingCompass, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import './app-services.css';


const AppServices = () => {
  return (
    <Container className ="services">
    <h1 className="text-center" id="services">My Services</h1>
      <Row>
        <Col>
          <Card className="text-center">
            <Card.Header>
              Basic package.
            </Card.Header>
            <Card.Body>
              <FontAwesomeIcon icon={ faCameraRetro } size="2x" className="fas fa-camera-retro" /><p></p>
              <Card.Title>
                Professional shooting.
              </Card.Title>
              <Card.Text>               
                Our basic direction is photo and portfolio.
                If you want quality over quantity, the Basic Package will provide it. Attention to details.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="text-center">
            <Card.Header>
              Medium package.
            </Card.Header>
            <Card.Body>
              <FontAwesomeIcon icon={ faDraftingCompass } size="2x" className="fas fa-drafting-compass"/><p></p>
              <Card.Title>
                Layout and web design.
              </Card.Title>
              <Card.Text>
                In this package you will receive a ready-made layout.
                The color scheme and other requirements are specified in the contract.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="text-center">
            <Card.Header> 
              Complete package.
            </Card.Header>
            <Card.Body>
              <FontAwesomeIcon icon={ faLaptopCode } size="2x" className="fas fa-laptop-code"/><p></p>
              <Card.Title>
                Fully working site.
              </Card.Title>
              <Card.Text>
                Today you dream of a website, and already tomorrow you receive form from your website users. We can help you with your task.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AppServices;
