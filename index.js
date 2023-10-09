const express = require("express");
const bodyParser = require("body-parser");

const userRoute = require("./routes/userRoutes");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

userRoute(app);

app.get("/", (req, res) => res.send("Hello World in Express!"));

app.listen(port, () => console.log("Api Running in localhost:3000"));
