// server.js
const express = require('express');
const app = express();
const port = 3001;

// Configurando a pasta public como estática
app.use(express.static(__dirname + '/public/'));

// Rota para a página Home
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando aqui -> http://localhost:${port}`);
});
