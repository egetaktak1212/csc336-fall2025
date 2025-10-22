import express from "express";

const app = express();

app.use(express.static("./public"));

app.get("/api/randomNumber", (ren, res) => { res.send(Math.random()); });

app.listen(3000);

