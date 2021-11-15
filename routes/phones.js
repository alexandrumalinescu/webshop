var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  console.log(req.query);

  // get phones array
  // filter phones array by query params
  // get filter array
  // set selected filters from querry
  // send phones and filters to render method
  res.render("phones", { title: "Phones" });
});

module.exports = router;
