import express, { json } from 'express';
import { connect } from 'mongoose';
const app = express();

require('dotenv').config();


//Database Conection
uri = process.env.DATABASE_URI;

connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


//Midlewares register
app.use(json());


//Server
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server ins running on port ${port}`);
})