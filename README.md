# E-commerce Web Service API

A RESTful E-commerce API built with Node.js, Express, and SQL (MySQL/PostgreSQL/SQLite) using the MVC architecture.

This project provides APIs for managing products, users, orders, and authentication.

# Features

- User Authentication (JWT-based login/signup)
- User Management (CRUD)
- Product Management (CRUD with pagination & search)
- Cart & Order APIs
- Checkout & Payments (dummy integration)
- MVC Project Structure (models, controllers, routes, services)
- SQL-based Database (MySQL/Postgres/SQLite supported)


src/
│   ├── config/          # Database & environment config
│   ├── controllers/     # Handle requests & responses
│   ├── models/          # SQL models (Sequelize/Knex/Raw SQL) (npm install sequelize mysql2)
│   ├── routes/          # Express route definitions
│   ├── services/        # Business logic (e.g., cart handling)
│   ├── middlewares/     # Auth & error handlers
│   └── app.js           # Express app setup

