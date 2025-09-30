const express = require('express');
const app = express();
const port = 5422;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/random", (req, res) => {
    const random = Math.floor(Math.random() * 1000);
    return res.status(200).send(random.toString());
});

app.get("/random/math", (req, res) => {
    const random = Math.floor(Math.random() * 1000);
    const random2 = Math.floor(Math.random() * 1000);
    const result = random + random2;
    return res.status(200).send(result.toString());
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server started on port ${port}`);
});