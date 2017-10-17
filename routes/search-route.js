const search = require("../services/search-service");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let query;

  try {
    query = req.query.q;
  } catch (error) {
    res.status(400);
    console.error(error);
  }

  const url = "".concat(
    "https://www.googleapis.com/youtube/v3/search?",
    "part=snippet&",
    "type=video&",
    `key=${process.env.YT_KEY}&`,
    `q=${query}`
  );

  search(url)
    .then(items => {
      if (items !== null) {
        res.json(items);
      } else {
        res.status = 400;
      }
    });
});

module.exports = router;