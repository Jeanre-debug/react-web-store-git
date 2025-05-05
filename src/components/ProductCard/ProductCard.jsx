import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from '../../redux/slices/cartSlice';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, name, price, description, image, rating, stock } = product;
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  
  // Create star rating display
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FontAwesomeIcon 
        key={i}
        icon={faStar} 
        className={i <= rating ? 'star-filled' : 'star-empty'} 
      />
    );
  }
  
  return (
    <Card className="product-card h-100">
      <div className="product-image-container">
        <Card.Img variant="top" src={image} className="product-image" />
        {stock < 10 && (
          <Badge bg="warning" text="dark" className="stock-badge">
            Only {stock} left
          </Badge>
        )}
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>
        <div className="rating mb-2">
          {stars}
          <span className="rating-text ms-1">({rating})</span>
        </div>
        <Card.Text>{description}</Card.Text>
        <div className="mt-auto">
          <div className="price-tag mb-2">${price.toFixed(2)}</div>
          <Button 
            variant="primary" 
            className="w-100 add-to-cart-btn"
            onClick={handleAddToCart}
          >
            <FontAwesomeIcon icon={faCartPlus} className="me-2" />
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
