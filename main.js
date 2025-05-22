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

app.listen(4000, () => {
  console.log(`listening on ${4000}`);
});
