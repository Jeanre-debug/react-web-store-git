import React from 'react';
import { useSelector } from 'react-redux';
import { Card, ListGroup } from 'react-bootstrap';
import { 
  selectCartTotal, 
  selectShippingCost, 
  selectOrderTotal 
} from '../../redux/slices/cartSlice';
import './OrderSummary.css';

const OrderSummary = () => {
  const cartTotal = useSelector(selectCartTotal);
  const shippingCost = useSelector(selectShippingCost);
  const orderTotal = useSelector(selectOrderTotal);
  
  return (
    <Card className="order-summary">
      <Card.Header>
        <h4 className="mb-0">Order Summary</h4>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex justify-content-between">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            <span>Shipping</span>
            <span>${shippingCost.toFixed(2)}</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            <span>Tax</span>
            <span>${(cartTotal * 0.07).toFixed(2)}</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between total-row">
            <span>Total</span>
            <span>${(orderTotal + (cartTotal * 0.07)).toFixed(2)}</span>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default OrderSummary;