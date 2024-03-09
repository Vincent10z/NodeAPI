const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});

app.get('/', (req, res) => {
    res.send('Hello from node API Server Updated');
});

mongoose.connect('mongodb+srv://admin:<password>@backenddb.ckaqw7p.mongodb.net/?retryWrites=true&w=majority&appName=backendDB')
  .then(() => console.log('Connected!'));