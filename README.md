
# Smart Warehouse Management System

## Overview
The Smart Warehouse Management System is an advanced web application designed to optimize inventory and logistics operations in large-scale warehouses. This project is built using Node.js, Express.js, MongoDB, and BigQuery, and includes features such as user authentication, inventory management, order processing, and real-time tracking. The application leverages BigQuery for comprehensive data analysis and reporting capabilities, ensuring efficient and secure warehouse operations.

## Features
- **User Authentication**: Secure user registration and login using JWT.
- **Inventory Management**: Add, update, delete, and view inventory items.
- **Order Processing**: Create, update, delete, and view orders.
- **Real-Time Tracking**: Monitor inventory and order status in real-time.
- **Data Analysis and Reporting**: Leverage BigQuery for analyzing large data sets and generating reports.
- **Security**: Ensure data protection with secure authentication and HTTPS.

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, BigQuery
- **API**: RESTful API
- **Authentication**: JWT (JSON Web Token)
- **Testing**: Mocha, Chai, Supertest

## Project Structure
```
SmartWarehouseManagement/
├── backend/
│   ├── config/
│   ├── controllers/
│   │   ├── inventoryController.js
│   │   ├── orderController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── Inventory.js
│   │   ├── Order.js
│   │   └── User.js
│   ├── routes/
│   │   ├── inventoryRoutes.js
│   │   ├── orderRoutes.js
│   │   └── userRoutes.js
│   ├── tests/
│   │   ├── inventory.test.js
│   │   └── user.test.js
│   ├── utils/
│   ├── package.json
│   └── server.js
├── data/
├── docs/
└── README.md
```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/oaslananka/SmartWarehouseManagement.git
   ```

2. Navigate to the `backend` directory and install the dependencies:
   ```bash
   cd SmartWarehouseManagement/backend
   npm install
   ```

3. Ensure MongoDB is installed and running on your system.

4. Start the server:
   ```bash
   npm start
   ```

## Usage
### User Registration and Login
- Register a new user:
  ```http
  POST /api/users/register
  {
    "name": "Your Name",
    "email": "your.email@example.com",
    "password": "yourpassword"
  }
  ```
- Login a user:
  ```http
  POST /api/users/login
  {
    "email": "your.email@example.com",
    "password": "yourpassword"
  }
  ```

### Inventory Management
- Add a new item to the inventory:
  ```http
  POST /api/inventory
  {
    "itemName": "Item Name",
    "quantity": 100,
    "location": "A1"
  }
  ```
- Get all inventory items:
  ```http
  GET /api/inventory
  ```

- Update an inventory item:
  ```http
  PUT /api/inventory
  {
    "id": "item_id",
    "quantity": 150,
    "location": "A2"
  }
  ```

- Delete an inventory item:
  ```http
  DELETE /api/inventory/:id
  ```

### Order Processing
- Create a new order:
  ```http
  POST /api/orders
  {
    "customerName": "Customer Name",
    "items": [
      {
        "itemName": "Item Name",
        "quantity": 10
      }
    ]
  }
  ```

- Get all orders:
  ```http
  GET /api/orders
  ```

- Update an order:
  ```http
  PUT /api/orders
  {
    "id": "order_id",
    "status": "Shipped",
    "shipDate": "2023-01-01"
  }
  ```

- Delete an order:
  ```http
  DELETE /api/orders/:id
  ```

## Testing
Run the tests using the following command:
```bash
npm test
```

## License
This project is licensed under the MIT License.

## Author
[@oaslananka](https://github.com/oaslananka)
