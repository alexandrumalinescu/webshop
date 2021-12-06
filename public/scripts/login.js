if (document.getElementById("form")) {
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let formData = new FormData();
    formData.append("email", username);
    formData.append("password", password);

    fetch(document.getElementById("login-form").action, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: username, password: password }),
    }).then((data) => {
      console.log(data);
      if (data.status === 200) {
        window.location.href = "http://localhost:3000/phones";
      } else {
        window.location.href = "http://localhost:3000";
      }
    });
    // let userfilter = users.filter(
    //   (user) => user.email === username && user.password === password
    // );
    // console.log(username);
    // console.log(password);
    // console.log(userfilter);

    if (userfilter.length > 0) {
      window.location.href = "http://localhost:3000/phones";
    }
  });
}
