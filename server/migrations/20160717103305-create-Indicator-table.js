module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Indicators', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      data_interacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_ult_alteracao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      formula_calculo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_drg_integracao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ident_direcao_seta: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ident_periodicidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ident_referencial: {
        type: Sequelize.STRING,
        allowNull: false
      },
      informacoes_adicionais: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      num_decimais: {
        type: Sequelize.STRING,
        allowNull: false
      },
      objetivo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      unidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      versao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      usuario_ult_alteracao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: (queryInterface  , Sequelize ) => queryInterface.dropTable('Indicator'),
};
