# React Web Store

A full-featured e-commerce web application built with React, Redux, and React Bootstrap.

## Overview

This project is a comprehensive web store application that allows users to browse products, add them to a cart, and simulate a checkout process. The application includes user authentication (register/login), product filtering, shopping cart functionality, and shipping options.

## Features

- **User Authentication**
  - Registration with form validation
  - Login functionality
  - Display logged-in username in header

- **Product Display**
  - Browse products by category
  - Search functionality
  - Responsive product cards
  - Add to cart capability

- **Shopping Cart**
  - Add/remove items from cart
  - Update item quantities
  - Order summary with calculations
  - Shipping method selection

- **Additional Features**
  - Responsive design
  - Help/support feature
  - Intuitive navigation
  - Form validation

## Technologies Used

- React.js
- Redux & Redux Toolkit (for state management)
- React Router
- React Bootstrap (for UI components)
- FontAwesome (for icons)
- JavaScript ES6+
- CSS3

## Installation and Setup

1. Clone this repository to your local machine:
   ```
   git clone https://github.com/yourusername/react-web-store.git
   ```

2. Navigate to the project directory:
   ```
   cd react-web-store
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

1. **Register/Login**
   - Click on the "Register" button in the header to create a new account
   - Use the "Login" button to access your account

2. **Browse Products**
   - Navigate to the "Products" page
   - Use category filters or search to find specific items
   - Click "Add to Cart" on any product to add it to your shopping cart

3. **Manage Cart**
   - View your cart by clicking the cart icon in the header
   - Adjust quantities or remove items as needed
   - Select a shipping method
   - Click "Proceed to Checkout" to complete your purchase

4. **Get Help**
   - Click the "Help" button in the shipping section for detailed information about shipping options

## Project Structure

```
react-web-store/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── images/
│       └── products/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── ProductCard/
│   │   ├── ProductList/
│   │   ├── Cart/
│   │   ├── Auth/
│   │   ├── ShippingOptions/
│   │   └── HelpModal/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── CartPage.jsx
│   │   └── NotFound.jsx
│   ├── redux/
│   │   ├── store.js
│   │   └── slices/
│   ├── utils/
│   ├── data/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Credits

This project was created as a Capstone Project for a React course. Special thanks to the instructors and mentors who provided guidance and feedback throughout the development process.

## License

This project is licensed under the MIT License.
