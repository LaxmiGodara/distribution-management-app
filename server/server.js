//Importing express
const express = require ('express');

//creating  express app
const app = express();

//choosing a port 
const PORT = 5000;


//defining a route for "/"
app.get("/", (req, res) => {
    res.send('Server is running successfully....')
});

//starting over
app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
});