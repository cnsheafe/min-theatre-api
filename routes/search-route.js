const search = require("../services/search-service");
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));
router.get("/", (req, res) => {
  let query;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  try {
    query = req.query.q;
  } catch (error) {
    res.status(400);
    console.error(error);
  }

  search.getResults(query)
    .then(items => {
      if (items !== null) {
        res.json(items);
      } else {
        res.status = 400;
      }
    });
});

router.post("/extra", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  let videoIds;
  console.log(req.body);  
  try {
    videoIds = req.body.ids;
  } catch (error) {
    res.status(400);
    console.error(error);
  }

  search.getExtraVideoInfo(videoIds)
    .then(items => {
      if (items !== null) {
        res.status(200);
        res.json(items);
      }
      else {
        res.status = 400;
      }
    });
});

module.exports = router;