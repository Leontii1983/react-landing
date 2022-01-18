import React, { useState } from 'react';
import { Jumbotron, Button, Container, Row, Col, Image, Modal } from 'react-bootstrap';
import Portret from '../../img/main_photo1.png';
import './app-jumbotron.css';

const AppJumbotron = () => {

  const [show, setShow] = useState(false); 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Jumbotron className="jumbotron">
        <Container className="mr-sm-4">
          <Row>
            <Col>
              <Image src={Portret} className="main-portret" width="300px" alt="my portret" rounded />
            </Col>
            <Col>
              <h1>Hi, guys!</h1>
              <p className="space-p">
                My name is Constance and this is my page and of course my portfolio. Many interesting portraits will be posted here. These are the most ordinary people, but each of them has its own story. 
              </p>
                Try to figure out their stories ...
              <p>
              </p>
              <p>
                P.S. Black and white are my favorites.
              </p>
              <p>
              <Button className="button-secondary" variant="secondary" id="but-sec" onClick={handleShow}>More →</Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            ABOUT ME.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Hi guys, once again!</h5>
          <p>My name is Constance and I am an aspiring photographer. I really love photography, art and just to create something beautiful! My portfolio is dominated by black and white photos.</p>
          <p>Why so, you ask? No, no, it's not because I'm a depressed person or something like this. I just think black and white photos have a lot of depth. They are heartfult and touching.</p>
          <p>I am 26 years old and I think this is just the beginning of my journey! So wish me only well and ....</p>
          <p>So enjoy watching!</p>
          <p>For questions - please fill out the form below. Thank you! I wish everyone well!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="button-secondary" id="close-modal" variant="secondary" onClick={handleClose}>Close →</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default AppJumbotron;