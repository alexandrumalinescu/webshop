if (document.getElementById("form")) {
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = document.getElementById("form");
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm__password").value;

    console.log(username);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);

    if (password === confirmPassword) {
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
          //show modal registered
          //save cookies
          window.location.href = "http://localhost:3000/phones";
        })
        .catch((err) => {
          console.log(err);
        });

      window.location.href = "http://localhost:3000/phones";
      console.log(users);
    } else {
      document.getElementById("same__password").style.display = "block";
    }
  });
}
