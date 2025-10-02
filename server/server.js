
require('dotenv').config();
const express = require ('express');
const mongoose = require('mongoose'); 


const app = express();



const PORT = process.env.PORT||8000;


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully.');
    
    app.listen(PORT, () => {
      console.log(`Server is running successfully on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
    process.exit(1); 
  });





app.get("/", (req, res) => {
    res.send('Server is running successfully....')
});


