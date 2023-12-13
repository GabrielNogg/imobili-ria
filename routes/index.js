// routes/index.js
const express = require('express');
const router = express.Router();

const imoveisRouter = require('./imoveis');
const pesquisaRouter = require('./pesquisa');
const chatRouter = require('./chat');

router.use('/imoveis', imoveisRouter);
router.use('/pesquisa', pesquisaRouter);
router.use('/chat', chatRouter);

module.exports = router;
