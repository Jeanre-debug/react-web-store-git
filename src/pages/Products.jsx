import React from 'react';
import { Container } from 'react-bootstrap';
import ProductList from '../components/ProductList/ProductList';

const Products = () => {
  return (
    <div className="products-page">
      <Container>
        <h1 className="page-title mb-4">Our Products</h1>
        <ProductList />
      </Container>
    </div>
  );
};

export default Products;
