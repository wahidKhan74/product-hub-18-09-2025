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
- NO-SQL-based Database (MongoDb supported)
- Dotenv for env varaible configuration (npm install dotenv)
- JWT + Bcryt (npm install jsonwebtoken bcryptjs )


src/
│   ├── config/          # Database & environment config
│   ├── controllers/     # Handle requests & responses
│   ├── models/          # Mongoose models (Mongoose) (npm install mongoose)
│   ├── routes/          # Express route definitions
│   ├── services/        # Business logic (e.g., cart handling)
│   ├── middlewares/     # Auth & error handlers
│   └── app.js           # Express app setup



Sequelize : ORM framework → Object Relational Mapper  :: MySQL, PostgreSQL, SQLite
Mongoose : ODM framework → Object Document Mapper   :: MongoDB


Uninstall/remove sequelize:
> npm remove sequelize mysql2

Install mongoose:
> npm install mongoose