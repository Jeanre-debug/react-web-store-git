import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Alert } from 'react-bootstrap';
import { loginUser, clearError } from '../../redux/slices/authSlice';

const Login = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  
  const dispatch = useDispatch();
  const { error, isAuthenticated } = useSelector(state => state.auth);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    
    // Clear Redux error when user types
    if (error) {
      dispatch(clearError());
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };
  
  // If login successful, close modal
  if (isAuthenticated && onSuccess) {
    onSuccess();
  }
  
  return (
    <div className="login-form">
      {error && <Alert variant="danger">{error}</Alert>}
      
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;