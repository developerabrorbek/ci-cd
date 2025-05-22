import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Docker serverdan salom");
});

app.all("/*splat", (req, res) => {
  res.status(404).send({
    message: "Bunday endpoint topilmadi",
  });
});

app.listen(7700, () => {
  console.log(`listening on ${7700}`);
});
