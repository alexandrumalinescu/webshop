var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("register", { title: "Register" });
});

router.post("/", function (req, res, next) {
  console.log(req.body);
  fetch(`http://localhost:3001/auth/register`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    }),
  })
    .then(function (response) {
      res.send("Successfully registered");
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
