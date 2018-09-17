const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;
const Indicator = require('../models').Indicator;

module.exports = {
    create(req, res) {
        return Indicator
            .create({
                title: req.body.title,
            })
            .then((indicator) => res.status(201).send(indicator))
            .catch((error) => res.status(400).send(error));
    },

    list(req, res) {
        return Indicator
            .findAll()
            .then((indicators) => res.status(200).send(indicators))
            .catch((error) => res.status(400).send(error));
    },

    retrieve(req, res) {
        return Indicator
            .findById(req.params.indicatorId)
            .then((indicator) => {
                if (!indicator) {
                    return res.status(404).send({
                        message: 'Todo Not Found',
                    });
                }
                return res.status(200).send(indicator);
            })
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return Indicator
            .findById(req.params.indicatorId)
            .then(indicator => {
                if (!indicator) {
                    return res.status(404).send({
                        message: 'Indicator não encontrado',
                    });
                }
                return indicator
                    .update({
                        dataInteracao: req.body.dataInteracao || indicator.dataInteracao,
                        dataUltAlteracao: req.body.dataUltAlteracao || indicator.dataUltAlteracao,
                        formulaCalculo: req.body.formulaCalculo || indicator.formulaCalculo,
                        idDrgIntegracao: req.body.idDrgIntegracao || indicator.idDrgIntegracao,
                        identDirecaoSeta: req.body.identDirecaoSeta || indicator.identDirecaoSeta,
                        identPeriodicidade: req.body.identPeriodicidade || indicator.identPeriodicidade,
                        identReferencial: req.body.identReferencial || indicator.identReferencial,
                        informacoesAdicionais: req.body.informacoesAdicionais || indicator.informacoesAdicionais,
                        nome: req.body.nome || indicator.nome,
                        numDecimais: req.body.numDecimais || indicator.numDecimais,
                        objetivo: req.body.objetivo || indicator.objetivo,
                        unidade: req.body.unidade || indicator.unidade,
                        versao: req.body.versao || indicator.versao,
                        usuarioUltAlteracao: req.body.usuarioUltAlteracao || indicator.usuarioUltAlteracao,
                    })
                    .then(() => res.status(200).send(indicator))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    destroy(req, res) {
        return Todo
            .findById(req.params.indicatorId)
            .then(indicator => {
                if (!indicator) {
                    return res.status(400).send({
                        message: 'Todo Not Found',
                    });
                }
                return indicator
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
};
