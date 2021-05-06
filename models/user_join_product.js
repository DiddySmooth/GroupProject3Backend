'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_join_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_join_product.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    creditcard: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_join_product',
  });
  return user_join_product;
};