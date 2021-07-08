// Require express
const express = require('express');

// Require connectDB
const connectDB = require('./config/connectDB');
const cors=require("cors")

// Require the router

const authRouter= require('./routes/api/auth');
const medicalFileRouter=require('./routes/api/medicalFile');


// Init express
const app = express();

// Middleware ==> Parse The Data To json
app.use(express.json());
app.use(cors())



// connectDB
connectDB();

// Use routes
//app.use('/api/auth', authRouter);
app.use('/api/auth',authRouter)
app.use('/api/medicalFile',medicalFileRouter)
// app.use('/api/authDoctor',authDoctor);
// app.use('/api/ProfileDoctor',ProfileDoctor);

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
 // const medicalFileRouter=require('./routes/api/medicalFile');
// const authDoctor=require('./routes/api/authDoctor');
// const ProfileDoctor=require('./routes/api/ProfileDoctor');
