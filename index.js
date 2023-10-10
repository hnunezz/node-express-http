const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");

const userRoute = require("./routes/userRoutes");
const statsRoute = require("./pcRamUsage.js");

const app = express();
const host = "http://localhost:";
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

userRoute(app);

app.get("/", (req, res) => {
  res.send("Hello World in Express!");
});

app.get("/stats", (req, res) => {
  res.send(statsRoute);
});

app.listen(port, () => console.log(`Server Running in ${host}${port}`));
