import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Card, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { setShippingMethod } from '../../redux/slices/cartSlice';
import HelpModal from '../HelpModal/HelpModal';
import './ShippingOptions.css';

const ShippingOptions = () => {
  const [showHelpModal, setShowHelpModal] = useState(false);
  
  const { shippingMethod } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  const handleShippingChange = (e) => {
    dispatch(setShippingMethod(e.target.value));
  };
  
  const shippingOptions = [
    {
      id: 'standard',
      name: 'Standard Shipping',
      price: 5.99,
      description: '5-7 business days',
    },
    {
      id: 'express',
      name: 'Express Shipping',
      price: 12.99,
      description: '2-3 business days',
    },
    {
      id: 'nextDay',
      name: 'Next-Day Delivery',
      price: 24.99,
      description: '1 business day',
    },
  ];
  
  return (
    <div className="shipping-options">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">Shipping Options</h4>
        <Button 
          variant="link" 
          className="help-btn p-0" 
          onClick={() => setShowHelpModal(true)}
        >
          <FontAwesomeIcon icon={faQuestionCircle} /> Help
        </Button>
      </div>
      
      <Card>
        <Card.Body>
          <Form>
            {shippingOptions.map(option => (
              <div key={option.id} className="shipping-option mb-3">
                <Form.Check
                  type="radio"
                  id={`shipping-${option.id}`}
                  name="shippingMethod"
                  value={option.id}
                  checked={shippingMethod === option.id}
                  onChange={handleShippingChange}
                  label={
                    <Row className="align-items-center">
                      <Col xs={8}>
                        <span className="shipping-name">{option.name}</span>
                        <div className="shipping-description">
                          {option.description}
                        </div>
                      </Col>
                      <Col xs={4} className="text-end">
                        <span className="shipping-price">
                          ${option.price.toFixed(2)}
                        </span>
                      </Col>
                    </Row>
                  }
                  className="shipping-radio"
                />
              </div>
            ))}
          </Form>
        </Card.Body>
      </Card>
      
      <HelpModal show={showHelpModal} onHide={() => setShowHelpModal(false)} />
    </div>
  );
};

export default ShippingOptions;