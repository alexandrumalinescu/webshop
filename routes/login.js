var express = require("express");
const axios = require("axios").default;
var router = express.Router();
//const fs = require("fs");
//let content = JSON.parse(fs.readFileSync("./phones.json", "utf8"));
//console.log(content);
/* GET users listing. */
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
      let compare = user.find(
        (user) => user.email === username && user.password === password
      );
      if (compare) {
        res.redirect("/phones");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});

// let user = users.find(
//   (user) => user.email === username && user.password === password
// );
// console.log(username);
// console.log(password);

// if (user) {
//   console.log("dddd");
//   //res.redirect("/phones");
//   res.end("Login successful..");
// } else {
//   res.end("invalid");
// }

module.exports = router;
