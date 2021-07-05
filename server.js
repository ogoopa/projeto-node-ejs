// o módulo express irá criar um servidor, renderizar todo o javascript e exibir no navegador;

const express = require('express');
const app = express();

// estamos avisando o express para utilizar a view engine e o ejs para renderizar tudo;
app.set("view engine", "ejs");

// após, devemos criar uma rota;
app.get('/', function (req, res) {
  const items = [
    {
      title: "D",
      message: "Desenvolver aplicações de forma fácil"
    },
    {
      title: "E",
      message: "EJS usa JavaScript para renderizar HTML"
    },
    {
      title: "M",
      message: "Muito fácil de usar"
    },
    {
      title: "A",
      message: "Altamente escalável"
    },
    {
      title: "I",
      message: "Install EJS"
    },
    {
      title: "S",
      message: "Sintaxe simples"
    }
  ];

  const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando Javascript"

  res.render("pages/index", {
    qualities: items,
    subtitle: subtitle,
  });
})

// segundo exemplo de rota, '/sobre';
app.get('/sobre', function (req, res) {
  res.render("pages/about");
})  

app.listen(8080);
console.log("Rodando");