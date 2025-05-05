import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Alert } from 'react-bootstrap';
import { registerUser, clearError } from '../../redux/slices/authSlice';
import { validateForm } from '../../utils/validation';

const Register = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });
  
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.auth);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    
    // Clear validation error when user types
    if (validationErrors[name]) {
      setValidationErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
    
    // Clear Redux error when user types
    if (error) {
      dispatch(clearError());
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    const { isValid, errors } = validateForm(formData);
    
    if (!isValid) {
      setValidationErrors(errors);
      return;
    }
    
    dispatch(registerUser(formData));
    
    // If no Redux error, registration successful
    if (!error) {
      setFormData({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
      });
      setIsSubmitted(false);
      
      if (onSuccess) {
        onSuccess();
      }
    }
  };
  
  return (
    <div className="register-form">
      {error && <Alert variant="danger">{error}</Alert>}
      
      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            isInvalid={isSubmitted && !!validationErrors.firstName}
            required
          />
          <Form.Control.Feedback type="invalid">
            {validationErrors.firstName}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            isInvalid={isSubmitted && !!validationErrors.lastName}
            required
          />
          <Form.Control.Feedback type="invalid">
            {validationErrors.lastName}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            isInvalid={isSubmitted && !!validationErrors.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            {validationErrors.username}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={isSubmitted && !!validationErrors.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            {validationErrors.email}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            isInvalid={isSubmitted && !!validationErrors.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            {validationErrors.password}
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            Password must be at least 8 characters and contain uppercase, lowercase, and number.
          </Form.Text>
        </Form.Group>
        
        <Button variant="primary" type="submit" className="w-100">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
