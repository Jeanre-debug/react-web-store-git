import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import CartItem from '../components/Cart/CartItem';
import OrderSummary from '../components/Cart/OrderSummary';
import ShippingOptions from '../components/ShippingOptions/ShippingOptions';
import './CartPage.css';

const CartPage = () => {
  const { items } = useSelector(state => state.cart);
  const { isAuthenticated } = useSelector(state => state.auth);
  
  return (
    <div className="cart-page">
      <Container>
        <h1 className="page-title mb-4">Your Shopping Cart</h1>
        
        {items.length === 0 ? (
          <div className="empty-cart">
            <Card className="text-center p-4">
              <div className="empty-cart-icon">
                <FontAwesomeIcon icon={faShoppingBag} />
              </div>
              <Card.Body>
                <Card.Title>Your cart is empty</Card.Title>
                <Card.Text>
                  Looks like you haven't added any products to your cart yet.
                </Card.Text>
                <Link to="/products">
                  <Button variant="primary">
                    Continue Shopping
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ) : (
          <Row>
            <Col lg={8}>
              <Card className="mb-4">
                <Card.Header>
                  <h4 className="mb-0">Cart Items ({items.length})</h4>
                </Card.Header>
                <Card.Body>
                  {items.map(item => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </Card.Body>
              </Card>
              
              <ShippingOptions />
              
              {!isAuthenticated && (
                <Alert variant="info" className="mb-4">
                  <strong>Please log in or register</strong> to complete your purchase.
                </Alert>
              )}
              
              <div className="cart-actions d-flex justify-content-between mb-4">
                <Link to="/products">
                  <Button variant="outline-primary">
                    Continue Shopping
                  </Button>
                </Link>
                
                <Button 
                  variant="success" 
                  size="lg"
                  disabled={!isAuthenticated}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </Col>
            
            <Col lg={4}>
              <OrderSummary />
              
              <Card className="secure-checkout">
                <Card.Body>
                  <h5 className="mb-3">Secure Checkout</h5>
                  <p className="mb-0">
                    Your payment information is processed securely. We do not store credit card details nor have access to your credit card information.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default CartPage;