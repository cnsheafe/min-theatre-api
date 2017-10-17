const express = require("express");
const searchRoute = require("./routes/search-route");

const app = express();
app.use("/search", searchRoute);

app.listen(3000, () => {
  console.log("Listening to app on port 3000");
});