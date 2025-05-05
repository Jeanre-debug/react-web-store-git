import React from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Button, Form, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeFromCart, updateQuantity } from '../../redux/slices/cartSlice';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { id, name, price, image, quantity } = item;
  const dispatch = useDispatch();
  
  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };
  
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };
  
  return (
    <div className="cart-item">
      <Row className="align-items-center">
        <Col xs={3} md={2}>
          <Image src={image} alt={name} fluid className="cart-item-image" />
        </Col>
        <Col xs={9} md={4}>
          <h5 className="cart-item-name">{name}</h5>
          <p className="cart-item-price">${price.toFixed(2)}</p>
        </Col>
        <Col xs={6} md={3}>
          <Form.Group>
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="quantity-input"
            />
          </Form.Group>
        </Col>
        <Col xs={6} md={2} className="text-end">
          <p className="item-total">${(price * quantity).toFixed(2)}</p>
        </Col>
        <Col xs={12} md={1} className="text-end">
          <Button 
            variant="outline-danger" 
            size="sm"
            onClick={handleRemove}
            className="remove-btn"
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;