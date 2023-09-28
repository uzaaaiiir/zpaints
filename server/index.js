const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

require("dotenv").config({ path: "./config/config.env" });

const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
