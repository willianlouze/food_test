const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;
const IndicatorController = require('../controllers').indicator;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Bem vindo a indicators api',
  }));

  app.post('/api/indicator', IndicatorController.create);
  app.get("/api/indicator", IndicatorController.list);
  app.get("/api/indicator/:indicatorId", IndicatorController.retrieve);
  app.put("/api/indicator/:indicatorId", IndicatorController.update);
  app.delete("/api/indicator/:indicatorId", IndicatorController.destroy);


  app.all('/api/indicator/:indicatorId/indicators', (req, res) => res.status(405).send({
    message: 'metodo não permitido',
  }));
};
