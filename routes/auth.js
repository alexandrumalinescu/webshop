var express = require("express");
const axios = require("axios").default;
const cookieParser = require("cookie-parser");
var router = express.Router();

router.get("/login", function (req, res) {
  res.render("login", {
    title: "Login",
  });
});

router.post("/login", (req, res) => {
  console.log(req.body);
  let email = req.body.email;
  let password = req.body.password;
  axios
    .post(
      `http://localhost:3001/auth/login`,
      {
        email: email,
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
        res.cookie("email", email, { secure: true });
        //res.cookie("password", password, { secure: true });
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

router.get("/logout", function (req, res, next) {
  // clear the cookie
  if (req.signedCookies.email) {
    res.clearCookie("email");
  }

  // redirect to homepage
  res.redirect("/#");
});

module.exports = router;
