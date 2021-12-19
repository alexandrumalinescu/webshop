var express = require("express");
const fs = require("fs");
const axios = require("axios").default;
var router = express.Router();

router.get("/", function (req, res, next) {
  let filterInput = {
    brand: req.query.brand,
    price: req.query.price,
    operating_system: req.query.os,
  };
  // console.log(filterInput);
  let email = req.cookies.email;
  if (email) {
    console.log("welcome user " + email);
  }
  //res.send(`brand : ${req.query.brand}`);
  res.render("phones", { title: "Phones", email: email });
  //console.log(content);
  // get phones array
  // filter phones array by query params
  // get filter array
  // set selected filters from querry
  // send phones and filters to render method
});

module.exports = router;
