import React from 'react';
import { Modal, Accordion, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faClock, faMoneyBill, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './HelpModal.css';

const HelpModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
          Shipping Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="help-intro mb-4">
          <p>
            We offer several shipping options to meet your needs. Please review
            the information below to choose the right shipping method for your order.
          </p>
        </div>
        
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <FontAwesomeIcon icon={faTruck} className="me-2" />
              Shipping Options
            </Accordion.Header>
            <Accordion.Body>
              <div className="shipping-option-details">
                <h5>Standard Shipping - $5.99</h5>
                <p>
                  Our most economical shipping option. Your order will be delivered
                  within 5-7 business days after processing. This option is available
                  for all orders within the continental United States.
                </p>
                
                <h5>Express Shipping - $12.99</h5>
                <p>
                  Need your items faster? Choose express shipping to receive your order
                  within 2-3 business days after processing. Available for all orders
                  within the continental United States.
                </p>
                
                <h5>Next-Day Delivery - $24.99</h5>
                <p>
                  For urgent needs, select next-day delivery to receive your order on
                  the next business day after processing (order must be placed before 2 PM EST).
                  Available for most locations within the continental United States.
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <FontAwesomeIcon icon={faClock} className="me-2" />
              Processing Times
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Most orders are processed within 1-2 business days after payment confirmation.
                During promotional periods or holidays, processing times may be slightly longer.
              </p>
              <p>
                Business days are Monday through Friday, excluding federal holidays.
                Orders placed on weekends or holidays will begin processing on the next
                business day.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <FontAwesomeIcon icon={faMoneyBill} className="me-2" />
              Shipping Policies
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Free standard shipping is available for orders over $75 (before tax).</li>
                <li>Shipping charges are calculated based on the shipping option selected and the delivery location.</li>
                <li>International shipping is available for select countries. Additional customs fees may apply.</li>
                <li>All orders include tracking information that will be sent to your email address.</li>
                <li>We are not responsible for shipping delays caused by customs, weather, or other circumstances beyond our control.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        
        <div className="contact-info mt-4">
          <h5>Need Additional Help?</h5>
          <p>
            If you have any questions about shipping or need assistance with your order,
            please contact our customer service team at <strong>support@reactwebstore.com</strong>
            or call us at <strong>(555) 123-4567</strong> during business hours.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default HelpModal;
