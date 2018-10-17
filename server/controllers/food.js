//const Indicator = require('../models').Indicator;
const Food = require('../models/food');

module.exports = {
    create(req, res) {
        res.status(201).send(Food.create(req.body));

    },

    list(req, res) {
        foods = Food.findAll();
        return res.status(200).send(foods);
    },

    retrieve(req, res){
        food = Food.findOne(req.params.foodName);
        if(!food){
            return res.status(404).send({
                message : 'Food não encontrada'
            });
        }

        return res.status(200).send(food);

    },
    update(req, res) {
        if(Food.updateOne(req.body)){
            res.status(400).send({
                message: 
                "Alterado com sucesso"
            })
        }
        else{
            res.status(202).send({
                message: "Food não encontrada"
            })
        }
        
    },

    destroy(req, res) {
        if(Food.deleteOne(req.params.foodName)){
            res.status(205).send({
                message : "deletado com sucesso"
            })
        }
        else{
            res.status(404).send({
                message : "Não existe item para que seja deletado"
            })
        }
    },
};
