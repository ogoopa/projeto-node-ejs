// o módulo express irá criar um servidor, renderizar todo o javascript e exibir no navegador;

const express = require('express');
const app = express();

// estamos avisando o express para utilizar a view engine e o ejs para renderizar tudo;
app.set("view engine", "ejs");

// após, devemos criar uma rota;
app.get('/', function (req, res) {
  res.render("index");
})

// segundo exemplo de rota, '/sobre';
app.get('/sobre', function (req, res) {
  res.render("about");
})  

app.listen(8080);
console.log("Rodando");