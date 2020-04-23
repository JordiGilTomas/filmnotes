const express = require("express");
const hbs = require("express-handlebars");
const { join } = require("path");
const router = require("./router/router");

const app = express();

app.engine(
  "hbs",
  hbs({
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");

app.set("views", join(__dirname, "views"));

app.set("port", process.env.PORT || 3000);

app.use(express.static(join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/", router);

app.listen(app.get("port"), () =>
  console.log(`Servidor arrancado en puerto ${app.get("port")}`)
);
