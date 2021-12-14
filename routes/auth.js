var express = require("express");
const axios = require("axios").default;
var router = express.Router();

router.get("/login", function (req, res) {
  res.render("login", {
    title: "Login",
  });
});

router.post("/login", (req, res) => {
  console.log(req.body);
  let username = req.body.email;
  let password = req.body.password;
  axios
    .post(
      `http://localhost:3001/auth/login`,
      {
        email: username,
        password: password,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    )
    .then(function (response) {
      const user = response.data;

      if (user) {
        //cookies
        //console.log(user);
        //document.getElementById("toast-login").style.display = "block";
        //next
        res.redirect("/phones");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/register", function (req, res, next) {
  res.render("register", { title: "Register" });
});

router.post("/register", function (req, res, next) {
  //console.log(req.body);
  axios
    .post(
      `http://localhost:3001/auth/register`,

      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    )
    .then(function (response) {
      res.send("Successfully registered");
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
