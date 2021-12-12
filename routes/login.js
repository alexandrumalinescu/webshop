var express = require("express");
const axios = require("axios").default;
var router = express.Router();

router.get("/", function (req, res) {
  res.render("login", {
    title: "Login",
  });
});

router.post("/", (req, res) => {
  let username = req.body.email;
  let password = req.body.password;
  axios
    .post(
      `http://localhost:3001/users/login`,
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
        //  document.getElementById("toast-login").style.display = "block";
        res.redirect("/phones");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
