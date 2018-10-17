const FoodController =  require('../controllers').food;
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Bem vindo a food api',
  }));

  app.delete('/api/food/:foodName', FoodController.destroy);
  app.get('/api/food/', FoodController.list);
  app.get('/api/food/:foodName', FoodController.retrieve);
  app.post('/api/food/', FoodController.create);
  app.put('/api/food/', FoodController.update);

  app.all('/api/indicator/:foodName/food', (req, res) => res.status(405).send({
    message: 'metodo não permitido',
  }));
};
