🛒 Full-Stack E-Commerce App

A simple MERN stack e-commerce application with:
✅ User authentication (JWT)
✅ Item management (CRUD + filters)
✅ Cart functionality
✅ React frontend with API integration

✨ Features

🔑 Authentication – Register & login with JWT

📦 Item Management – Add, update, delete, filter items

🛍️ Cart – Add/remove items, view cart

⚡ Frontend – React with API integration

🗄️ Backend – Node.js, Express, MongoDB

📂 Project Structure
ecommerce-app/
├── backend/                # Express + MongoDB
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── frontend/               # React
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   ├── public/
│   └── package.json
└── README.md

⚙️ Tech Stack
🔧 Backend

Node.js + Express

MongoDB + Mongoose

JWT + bcrypt

CORS

🎨 Frontend

React + React Router

Axios (API calls)

Bootstrap / CSS

🔧 Backend Setup
cd backend
npm install


Create .env file:

MONGO_URI=mongodb://127.0.0.1:27017/ecommerce
JWT_SECRET=supersecretkey
PORT=5000


Run backend:

npm start   # http://localhost:5000

🎨 Frontend Setup
cd frontend
npm install


Set API base URL in src/services/api.js:

const API_BASE_URL = "http://localhost:5000/api";
export default API_BASE_URL;


Run frontend:

npm start   # http://localhost:3000

📡 API Endpoints
🔑 Auth

POST /api/auth/register – Register

POST /api/auth/login – Login

📦 Items

GET /api/items – Get items (with filters)

POST /api/items – Create item

PUT /api/items/:id – Update item

DELETE /api/items/:id – Delete item

🛍️ Cart (Protected)

POST /api/cart/add – Add item

GET /api/cart/me – Get user cart

DELETE /api/cart/remove/:itemId – Remove item

🔒 Authentication

Use JWT in headers:

Authorization: Bearer <your_token> 

🖥 Backend Deployment

🚀 Platform: Render

🌐 Live URL: https://ecommerce-website-5il4.onrender.com/

🔑 Environment Variables:

MONGO_URI – mongodb+srv://<db_username>:<db_password>@cluster0.uemhadh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

JWT_SECRET – Secret key for JWT authentication

PORT – 10000

💻 Frontend Deployment
🚀 Platform: Vercel

🌐 Live URL: https://ecommerce-website-beige-mu.vercel.app/
