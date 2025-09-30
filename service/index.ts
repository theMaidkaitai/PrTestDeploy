const express = require('express');
const app = express();
const port = 5422
const cors = require("cors");


app.use(cors());
app.use(express.json());


app.get("/random", (req: Request, res: Response) => {
    const random = Math.floor(Math.random() * 1000);
    //@ts-ignore
    return res.status(200).send(random);
})


app.get("/random/math", (req: Request, res: Response) => {
    const random = Math.floor(Math.random() * 1000);
    const random2 = Math.floor(Math.random() * 1000);
    const result = random + random2
    //@ts-ignore
    return res.status(200).send(result);
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})