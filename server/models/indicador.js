module.exports = (sequelize, DataTypes) => {
  const Indicator = sequelize.define('Indicator', {

    dataInteracao: {
      type: DataTypes.STRING,
      allowNull: false,
      field : 'data_interacao'
    },
    dataUltAlteracao:{
      type : DataTypes.STRING,
      allowNull : false,
      field: 'data_ult_alteracao'
    },
    formulaCalculo : {
      type : DataTypes.STRING,
      allowNull: false,
      field : 'formula_calculo',
    },
    idDrgIntegracao: {
      type : DataTypes.STRING,
      allowNull: false,
      field: 'id_drg_integracao'
    },
    identDirecaoSeta: {
      type : DataTypes.STRING,
      allowNull: false,
      field: 'ident_direcao_seta'
    },
    identPeriodicidade: {
      type : DataTypes.STRING,
      allowNull: false,
      field: 'ident_periodicidade'
    },
    identReferencial: {
      type : DataTypes.STRING,
      allowNull: false,
      field: 'ident_referencial'
    },
    informacoesAdicionais: {
      type : DataTypes.STRING,
      allowNull: false,
      field: 'informacoes_adicionais'
    },
    nome: {
      type : DataTypes.STRING,
      allowNull: false,
      field: 'nome'
    },
    numDecimais: {
      type : DataTypes.STRING,
      allowNull: false,
      field: 'num_decimais'
    },
    objetivo: {
      type : DataTypes.STRING,
      allowNull: false,
      field: 'objetivo',
    },
    unidade: {
      type : DataTypes.STRING,
      allowNull: false,
      field: 'unidade',
    },
    versao: {
      type : DataTypes.STRING,
      allowNull: false,
      field : 'versao'
    },
    usuarioUltAlteracao: {
      type : DataTypes.STRING,
      allowNull: false,
      field : 'usuario_ult_alteracao'
    },
  });
  return Indicator;
};
