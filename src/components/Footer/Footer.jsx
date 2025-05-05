import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>React Web Store</h5>
            <p className="footer-text">Your one-stop shop for quality products</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/cart">Cart</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <address>
              <p>123 Store Street</p>
              <p>City, Country</p>
              <p>Email: info@reactwebstore.com</p>
            </address>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p className="copyright">
              &copy; {currentYear} React Web Store | All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
