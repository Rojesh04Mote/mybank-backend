const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
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
