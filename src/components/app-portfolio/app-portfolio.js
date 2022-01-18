import React, {Component} from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import './app-portfolio.css';
import Img1 from "../../img/carousel2.jpg";
import Img2 from "../../img/portfolio1.jpg";
import Img3 from "../../img/carousel1.jpg";
import Img4 from "../../img/portfolio2.jpg";
import Img5 from "../../img/portfolio4.jpg";
import Img6 from "../../img/portfolio3.jpg";
import Img7 from "../../img/portfolio5.jpg";
import Img8 from "../../img/carousel3.jpg";
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css'; 
 

const images = [
  Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8
];

export default class AppPortfolio extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false
    };

    this.imgIndex1 = () => {
      this.setState({
        isOpen: true,
        photoIndex: 0
      })
    }

    this.imgIndex2 = () => {
      this.setState({
        isOpen: true,
        photoIndex: 1
      })
    }

    this.imgIndex3 = () => {
      this.setState({
        isOpen: true,
        photoIndex: 2
      })
    }

    this.imgIndex4 = () => {
      this.setState({
        isOpen: true,
        photoIndex: 3
      })
    }

    this.imgIndex5 = () => {
      this.setState({
        isOpen: true,
        photoIndex: 4
      })
    }

    this.imgIndex6 = () => {
      this.setState({
        isOpen: true,
        photoIndex: 5
      })
    }

    this.imgIndex7 = () => {
      this.setState({
        isOpen: true,
        photoIndex: 6
      })
    }

    this.imgIndex8 = () => {
      this.setState({
        isOpen: true,
        photoIndex: 7
      })
    }
  }

  render() {

    const { photoIndex, isOpen } = this.state;

    return (
      <React.Fragment>
        <Container className="portfolio">
        <h1 className="text-center" id="portfolio">Portfolio</h1>
        <Row>
          <Col>
            <Card className="card-photo" style={{ width: '14rem' }} >
              <Image src={Img1} width="250px" height="165px" alt="image 1" rounded onClick={this.imgIndex1} />
            </Card>
          </Col>
          <Col>
            <Card className="card-photo"  style={{ width: '14rem' }}>
              <Image src={Img2} width="250px" height="165px" alt="image 2" rounded onClick={this.imgIndex2} />
            </Card>
          </Col>
          <Col>
            <Card className="card-photo"  style={{ width: '14rem' }}>
              <Image src={Img3} width="250px" height="165px" alt="image 3" rounded onClick={this.imgIndex3} />
            </Card>
          </Col>
          <Col>
            <Card className="card-photo"  style={{ width: '14rem' }}>
              <Image src={Img4} width="250px" height="165px" alt="image 4" rounded onClick={this.imgIndex4} />
            </Card>
          </Col>
          <Col>
            <Card className="card-photo"  style={{ width: '14rem' }}>
              <Image src={Img5} width="250px" height="165px" alt="image 5" rounded onClick={this.imgIndex5} />
            </Card>
          </Col>
          <Col>
            <Card className="card-photo"  style={{ width: '14rem' }}>
              <Image src={Img6} width="250px" height="165px" alt="image 6" rounded onClick={this.imgIndex6} />
            </Card>
          </Col>
          <Col>
            <Card className="card-photo"  style={{ width: '14rem' }}>
              <Image src={Img7} width="250px" height="165px" alt="image 7" rounded onClick={this.imgIndex7} />
            </Card>
          </Col>
          <Col>
            <Card className="card-photo"  style={{ width: '14rem' }}>
              <Image src={Img8} width="250px" height="165px" alt="image 8" rounded onClick={this.imgIndex8} />
            </Card>
          </Col>
        </Row> 

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
        </Container>
      </React.Fragment>
    );
  }
}



