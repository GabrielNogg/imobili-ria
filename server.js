// server.js
const express = require('express');
const app = express();
const port = 3001;

// Configurando a view engine como EJS
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

// Rota para a página Home
app.get('/', (req, res) => {
  res.render('home', {
    imoveisDestaque: [
      {
        titulo: 'Casa na Praia',
        descricao: 'Linda casa com vista para o mar.',
      },
      {
        titulo: 'Apartamento no Centro',
        descricao: 'Apartamento espaçoso no coração da cidade.',
      },
      // Adicione mais imóveis conforme necessário
    ],
  });
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando aqui -> http://localhost:${port}`);
});
