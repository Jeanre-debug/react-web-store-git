import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Form, InputGroup, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import { filterByCategory, searchProducts } from '../../redux/slices/productSlice';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

const ProductList = () => {
  const [searchInput, setSearchInput] = useState('');
  const { filteredProducts, categories, selectedCategory } = useSelector(state => state.products);
  const dispatch = useDispatch();
  
  const handleCategoryChange = (e) => {
    dispatch(filterByCategory(e.target.value));
  };
  
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(searchProducts(searchInput));
  };
  
  return (
    <div className="product-list">
      <Container>
        <div className="filters-section mb-4">
          <Row>
            <Col md={6} lg={4}>
              <Form.Group>
                <Form.Label className="filter-label">
                  <FontAwesomeIcon icon={faFilter} className="me-2" />
                  Filter by Category
                </Form.Label>
                <Form.Select 
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="filter-select"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6} lg={8}>
              <Form onSubmit={handleSearchSubmit}>
                <Form.Label className="filter-label">
                  <FontAwesomeIcon icon={faSearch} className="me-2" />
                  Search Products
                </Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Search by product name..."
                    value={searchInput}
                    onChange={handleSearchChange}
                  />
                  <Button variant="primary" type="submit">
                    Search
                  </Button>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        </div>
        
        <div className="products-count mb-3">
          Showing {filteredProducts.length} products
        </div>
        
        <Row>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                <ProductCard product={product} />
              </Col>
            ))
          ) : (
            <Col xs={12}>
              <div className="no-products-message">
                No products found. Try changing filters or search terms.
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;