const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api')
const app = express();
const cors = require('cors');

//Env
require('dotenv').config();
uri = process.env.DATABASE_URI;

//Database Conection
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//CORS
app.use(cors());

//Midlewares register
app.use(express.json());
app.use('/api', apiRoutes);


//Server
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server ins running on port ${port}`);
})