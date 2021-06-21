// Require express
const express = require('express');

// Require connectDB
const connectDB = require('./config/connectDB');

// Require the router
// const authRouter = require('./routes/auth');
const userRoutes=require('./routes/api/userRoutes')


// Init express
const app = express();

// Middleware ==> Parse The Data To json
app.use(express.json());

// connectDB
connectDB();

// Use routes
//app.use('/api/auth', authRouter);
app.use('/api/users',userRoutes)

// Create port
const port = process.env.PORT || 5000;


// Launch the serveer
app.listen(port, (error) =>
  error
    ? console.log(error)
    : console.log(`The server is running on port ${port}`)
);


 // "client": "npm start --prefix client",
 // "dev": "concurrently \"npm run server\"\"npm run client\""