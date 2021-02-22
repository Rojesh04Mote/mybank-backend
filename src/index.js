const express = require('express');

const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const bankRoutes = require('./routes/bank.routes');

dotenv.config();
app.use(express.json());
app.use(cors());

// eslint-disable-next-line no-undef
const PORT = process.env.PORT;
// eslint-disable-next-line no-undef
const URI = process.env.ATLAS_URI;

const dbParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
};

mongoose.connect(URI, dbParams, () => {
    console.log('Database connected successfully!!');
});

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});

app.use('/bank', bankRoutes);
