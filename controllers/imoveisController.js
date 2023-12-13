// controllers/imoveisController.js
const mostrarHome = (req, res) => {
  const imoveisDestaque = [
    { titulo: 'Casa na Praia', descricao: 'Linda casa com vista para o mar.' },
    {
      titulo: 'Apartamento no Centro',
      descricao: 'Apartamento espaçoso no coração da cidade.',
    },
    // Adicione mais imóveis conforme necessário
  ];

  res.render('home', { imoveisDestaque });
};

module.exports = {
  mostrarHome,
};
