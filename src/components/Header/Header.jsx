import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Nav, Container, Button, Badge, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { logoutUser } from '../../redux/slices/authSlice';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import './Header.css';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <header className="site-header">
      <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">React Web Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/cart" className="cart-icon">
                <FontAwesomeIcon icon={faShoppingCart} />
                {cartItemsCount > 0 && (
                  <Badge pill bg="danger" className="cart-badge">
                    {cartItemsCount}
                  </Badge>
                )}
              </Nav.Link>
              
              {isAuthenticated ? (
                <div className="user-controls d-flex align-items-center">
                  <span className="welcome-text me-3">
                    Welcome, {user.username}
                  </span>
                  <Button 
                    variant="outline-light" 
                    size="sm" 
                    onClick={handleLogout}
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-1" />
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="auth-buttons">
                  <Button 
                    variant="outline-light" 
                    size="sm" 
                    className="me-2"
                    onClick={() => setShowLogin(true)}
                  >
                    Login
                  </Button>
                  <Button 
                    variant="light" 
                    size="sm"
                    onClick={() => setShowRegister(true)}
                  >
                    Register
                  </Button>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {/* Login Modal */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login onSuccess={() => setShowLogin(false)} />
        </Modal.Body>
      </Modal>
      
      {/* Register Modal */}
      <Modal show={showRegister} onHide={() => setShowRegister(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register onSuccess={() => {
            setShowRegister(false);
            setShowLogin(true);
          }} />
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default Header;
