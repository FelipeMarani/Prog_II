const express = require('express');


const app = express();
app.use(express.json());
app.listen(8080, () => console.log("Server running on port 8080"));

app.get("/", (req, res) => {
    res.send("Hello World!!!");
});

app.post("/mensage", (req, res) => {
    const name = req.body.name;
    console.log(req.body);
    res.send(`Hi ${name}!`);
});
