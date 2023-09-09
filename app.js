const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();


//Database Conection
uri = process.env.DATABASE_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


//Midlewares register
app.use(express.json());


//Server
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server ins running on port ${port}`);
})