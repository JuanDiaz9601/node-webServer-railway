//importamos la libreria
const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

//llamamos a express
const app = express();
const port = process.env.PORT;

//handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido estático
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Fernando Herrera",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Fernando Herrera",
    titulo: "Curso de Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Fernando Herrera",
    titulo: "Curso de Node",
  });
});

app.get("*", function (req, res) {
  res.render(__dirname + "/views/404.hbs");
});

app.listen(port, () => {
  console.log(`La aplicacion esta corriendo en el puerto ${port}`);
});
