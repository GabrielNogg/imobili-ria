// routes/index.js
const express = require('express');
const router = express.Router();

const imoveisRouter = require('./imoveis');
const pesquisaRouter = require('./pesquisa');
const chatRouter = require('./chat');

// Adicione a rota para a página Home
router.get('/', (req, res) => {
  res.render('home'); // O arquivo home.ejs será renderizado
});

router.use('/imoveis', imoveisRouter);
router.use('/pesquisa', pesquisaRouter);
router.use('/chat', chatRouter);

module.exports = router;
