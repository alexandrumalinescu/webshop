var express = require("express");
const fs = require("fs");
const axios = require("axios").default;
var router = express.Router();

let productJson = {
  products: [
    {
      name: "Galaxy A12",
      brand: "Samsung",
      operating_system: "Android",
      price: 899,
      discount: 0,
      quantity: 2000,
      availability_date: "2020-11-24",
      rating: 4,
    },
    {
      name: "Galaxy a52s 5G",
      brand: "Samsung",
      operating_system: "Android",
      price: 1849,
      discount: 0,
      quantity: 2500,
      availability_date: "2021-08-17",
      rating: 5,
    },
    {
      name: "Galaxy s21",
      brand: "Samsung",
      operating_system: "Android",
      price: 3899,
      discount: 50,
      quantity: 800,
      availability_date: "2021-01-29",
      rating: 4,
    },
    {
      name: "Moto G30",
      brand: "Motorola",
      operating_system: "Android",
      price: 799,
      discount: 100,
      quantity: 1000,
      availability_date: "2021-03-17",
      rating: 4.5,
    },
    {
      name: "iPhone 13",
      brand: "Apple",
      operating_system: "iOS",
      price: 4449,
      discount: 0,
      quantity: 3500,
      availability_date: "2021-09-14",
      rating: 5,
    },
    {
      name: "iPhone 13 Pro",
      brand: "Apple",
      operating_system: "iOS",
      price: 5699,
      discount: 0,
      quantity: 3000,
      availability_date: "2021-09-14",
      rating: 5,
    },
    {
      name: "Mi 11 Lite 5G",
      brand: "Xiaomi",
      operating_system: "Android",
      price: 1449,
      discount: 0,
      quantity: 1500,
      availability_date: "2021-03-29",
      rating: -1,
    },
    {
      name: "Pixel 6",
      brand: "Google",
      operating_system: "Android",
      price: 649,
      discount: 0,
      quantity: 0,
      availability_date: "2999-10-25",
      rating: -1,
    },
  ],
  standard_delivery_fee: 35,
  free_delivery_min_price: 500,
};

router.get("/", function (req, res, next) {
  axios.get("http://localhost:3001/phones").then(function (res) {
    let products = res.data;
  });

  let filterInput = {
    brand: req.query.brand,
    price: req.query.price,
    operating_system: req.query.os,
  };
  console.log(filterInput);

  //res.send(`brand : ${req.query.brand}`);
  res.render("phones", { title: "Phones" });
  //console.log(content);
  // get phones array
  // filter phones array by query params
  // get filter array
  // set selected filters from querry
  // send phones and filters to render method
});

module.exports = router;
