# Iniciando um Projeto em Node utilizando EJS;

- entrar na pasta do projeto pelo TERMINAL;
- inserir o comando npm init -y;
- será criado a pasta package.json dentro da pasta do projeto;
- dentro do package.json estará o name: do projeto;
- criar um arquivo index.html;
  - neste caso, iremos criar primeiro um HTML e depois passar para o EJS;

- no terminal, inserir o comando npm install ejs
  - mudar o arquivo para index.ejs

- inserir o comando npm install express

- após esses passos, serão criados os arquivos node_modules e package-lock.json;

- para conseguir rodar o index.ejs:
  - criar um arquivo server.js

  <!-- para utilizar código de Javascript dentro da tag EJS (<% %>) não é necessário utilizar o '-' (<%-) %> -->
  <!-- quando for necessário inserir um trecho HTML dentro da tag EJS que está executando Javascript, é necessário fechar a tag do EJS, para após abrir novamente e dar sequência no código javascript -->