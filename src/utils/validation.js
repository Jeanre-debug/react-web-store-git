export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validatePassword = (password) => {
    // Password must be at least 8 characters, contain uppercase, lowercase, and number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };
  
  export const validateName = (name) => {
    // Name should contain only letters and be at least 2 characters
    const nameRegex = /^[a-zA-Z]{2,}$/;
    return nameRegex.test(name);
  };
  
  export const validateUsername = (username) => {
    // Username should be alphanumeric and at least 3 characters
    const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
    return usernameRegex.test(username);
  };
  
  export const validateForm = (formData) => {
    const errors = {};
    
    // Validate first name
    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    } else if (!validateName(formData.firstName)) {
      errors.firstName = 'First name should contain only letters and be at least 2 characters';
    }
    
    // Validate last name
    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    } else if (!validateName(formData.lastName)) {
      errors.lastName = 'Last name should contain only letters and be at least 2 characters';
    }
    
    // Validate username
    if (!formData.username) {
      errors.username = 'Username is required';
    } else if (!validateUsername(formData.username)) {
      errors.username = 'Username should be alphanumeric and at least 3 characters';
    }
    
    // Validate email
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Invalid email address';
    }
    
    // Validate password
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      errors.password = 'Password must be at least 8 characters and contain uppercase, lowercase, and number';
    }
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  };