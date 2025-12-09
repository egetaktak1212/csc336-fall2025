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

app.use(express.static("./public"));

app.listen(3000);


//review section for the games
//you make the review in the game page and its viable in a larger section where you can sort reviews by game and allat
//the api could be like a profile creator where you write your name and pick your fav game