import React from 'react';
import { Container, Row, Col, Button, Carousel, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShippingFast, 
  faMoneyBillWave, 
  faHeadset,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Carousel>
          <Carousel.Item>
            <div className="carousel-image bg-1">
              <div className="carousel-overlay">
                <Container>
                  <div className="carousel-content">
                    <h1>Welcome to React Web Store</h1>
                    <p>Discover amazing products at unbeatable prices</p>
                    <Link to="/products">
                      <Button variant="primary" size="lg">
                        Shop Now
                      </Button>
                    </Link>
                  </div>
                </Container>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-image bg-2">
              <div className="carousel-overlay">
                <Container>
                  <div className="carousel-content">
                    <h1>New Season Arrivals</h1>
                    <p>Check out the latest trends and styles</p>
                    <Link to="/products">
                      <Button variant="primary" size="lg">
                        Explore Collection
                      </Button>
                    </Link>
                  </div>
                </Container>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-image bg-3">
              <div className="carousel-overlay">
                <Container>
                  <div className="carousel-content">
                    <h1>Special Offers</h1>
                    <p>Limited time deals on popular items</p>
                    <Link to="/products">
                      <Button variant="primary" size="lg">
                        View Deals
                      </Button>
                    </Link>
                  </div>
                </Container>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <Container>
          <h2 className="section-title text-center mb-5">Why Choose Us</h2>
          <Row>
            <Col md={4}>
              <div className="feature-card text-center">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faShippingFast} />
                </div>
                <h3>Free & Fast Shipping</h3>
                <p>Get your products delivered quickly with our express shipping options</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card text-center">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faMoneyBillWave} />
                </div>
                <h3>Money Back Guarantee</h3>
                <p>Not satisfied with your purchase? Get a full refund within 30 days</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card text-center">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faHeadset} />
                </div>
                <h3>24/7 Customer Support</h3>
                <p>Our support team is always available to help with any questions</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="categories-section py-5 bg-light">
        <Container>
          <h2 className="section-title text-center mb-5">Shop by Category</h2>
          <Row>
            <Col md={3}>
              <Card className="category-card">
                <Card.Img variant="top" src="/images/products/headphones.jpg" />
                <Card.Body>
                  <Card.Title>Electronics</Card.Title>
                  <Link to="/products" className="category-link">
                    View Products <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="category-card">
                <Card.Img variant="top" src="/images/products/shirt.jpg" />
                <Card.Body>
                  <Card.Title>Clothing</Card.Title>
                  <Link to="/products" className="category-link">
                    View Products <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="category-card">
                <Card.Img variant="top" src="/images/products/running-shoes.jpg" />
                <Card.Body>
                  <Card.Title>Footwear</Card.Title>
                  <Link to="/products" className="category-link">
                    View Products <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="category-card">
                <Card.Img variant="top" src="/images/products/wallet.jpg" />
                <Card.Body>
                  <Card.Title>Accessories</Card.Title>
                  <Link to="/products" className="category-link">
                    View Products <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-5">
        <Container>
          <div className="cta-content text-center">
            <h2>Ready to Start Shopping?</h2>
            <p>Browse our collection of high-quality products</p>
            <Link to="/products">
              <Button variant="primary" size="lg">
                Shop Now
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
