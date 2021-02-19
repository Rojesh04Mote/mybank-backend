const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
app.use(cors());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
