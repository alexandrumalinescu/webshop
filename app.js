var createError = require("http-errors");
var express = require("express");
const bodyparser = require("body-parser");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var usersRouter2 = require("./routes/users2");
var phonesRouter = require("./routes/phones");
const loginRouter = require("./routes/login");
const detailsRouter = require("./routes/details");
const registerRouter = require("./routes/register");
const authRouter = require("./routes/auth");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));
app.use(cookieParser("Some Random String Secret"));
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/users2", usersRouter);
app.use("/phones", phonesRouter);
app.use("/login", loginRouter);
app.use("/details/:phone", detailsRouter);
app.use("/register", registerRouter);
app.use("/auth", authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
