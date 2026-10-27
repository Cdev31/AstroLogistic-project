const express = require("express");
const cors = require("cors");
const { ApiRouter } = require("./router");

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (_, res) => {
    res.status(200).json({
        api: "AstroLogistic"
    })
})
ApiRouter(app);
app.listen(port, () => {
    console.log(`Server in localhost:${port}`)
})