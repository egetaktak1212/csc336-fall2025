import express from "express";
import fs from "fs";

const app = express();

app.use(express.static("./public"));
app.use(express.json());
app.get("/world", async (req, res) => {
    const dataString = await fs.readFileSync("world.json", "utf-8");
    const dataObject = JSON.parse(dataString);
    res.json(dataObject);
});

app.post("/update", async (req, res) => {
    const updatedworld = req.body;

    fs.writeFileSync("./world.json", JSON.stringify(updatedworld));
    res.json("uhh");
});

// app.get("/resetJSON", async (req, res) => {
//     const dataString = await fs.readFileSync("worldsafeduplication.json", "utf-8");
//     fs.writeFileSync("./world.json", dataString);
//     res.json("uhh");
// });



app.listen(3000, () => console.log("Server running on http://localhost:3000"));
