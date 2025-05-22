import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Docker serverdan salom");
});

app.get("/test", (req, res) => {
  res.send("CI/CD ishlayapti");
});

app.all("/*splat", (req, res) => {
  res.status(404).send({
    message: "Bunday endpoint topilmadi",
  });
});

app.listen(7700, () => {
  console.log(`listening on port ${7700}`);
});
