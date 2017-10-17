const express = require("express");
const searchRoute = require("./routes/search-route");

const app = express();
app.use("/search", searchRoute);

let port = 3000;
if (process.argv.length === 3) {
  port = +process.argv[2];
}

app.listen(port, () => {
  console.log(`Listening to app on port ${port}`);
});