import express from "express"
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors())


app.get("/api/data", (req, res) =>  {
  res.json({
    title: "Test Title",
    items: "12345"
  });
});

app.listen(3000);
