import express from "express"
import cors from "cors"
import fs from "fs";

const app = express();

app.use(express.json());
app.use(cors())


app.get("/api/reviews", (req, res) => {
  try {
    const reviewsString = fs.readFileSync("./reviews.json", "utf-8");
    const reviewsObject = JSON.parse(reviewsString);
    res.json(reviewsObject);
  } catch (err) {
    console.error(err);
  }
});

app.post("/api/reviews", (req, res) => {

  const updatedReviews = req.body;
  fs.writeFileSync("./reviews.json", JSON.stringify(updatedReviews));
  res.json("good");

});

app.use(express.static("./public"));

app.listen(3000);
