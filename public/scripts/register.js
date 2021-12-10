const form = document.getElementById("form");
const rules = document.getElementById("password");

rules.addEventListener("click", () => {
  let showePasswordErrors = document.getElementsByClassName("errors")[0];
  showePasswordErrors.style.display = "block";
});

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm__password").value;
    let upper = document.getElementById("upper");
    let length = document.getElementById("length");
    let num = document.getElementById("number");
    let specialChar = document.getElementById("special_char");
    let lower = document.getElementById("lower");

    console.log(username);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    if (/[a-z]/.test(password)) {
      lower.style.color = "green";
    } else {
      lower.style.color = "red";
    }

    if (/[A-Z]/.test(password)) {
      upper.style.color = "green";
    } else {
      upper.style.color = "red";
    }

    if (/[0-9]/.test(password)) {
      num.style.color = "green";
    } else {
      num.style.color = "red";
    }

    if (password.length > 5) {
      length.style.color = "green";
    } else {
      length.style.color = "red";
    }

    if (/[^A-Za-z0-9]/.test(password)) {
      specialChar.style.color = "green";
    } else {
      specialChar.style.color = "red";
    }

    if (
      password === confirmPassword &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      password.length > 5 &&
      /[^A-Za-z0-9]/.test(password)
    ) {
      fetch(form.action, {
        method: "post",
        // mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      })
        .then((response) => {
          alert("Registration complete");
          //save cookies
          window.location.href = "http://localhost:3000/phones";
        })
        .catch((err) => {
          console.log(err);
        });

      window.location.href = "http://localhost:3000/phones";
      //console.log(users);
    } else if (password !== confirmPassword) {
      document.getElementById("same__password").style.display = "block";
    } else if (password === confirmPassword) {
      document.getElementById("same__password").style.display = "none";
    }
  });
}
