const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const path = require("path");

const apiRouter = require("./routes/api");
PORT = Number(3000);

app.use("/api", apiRouter);

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
