'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.product.belongsToMany(models.user,{through:'user_join_product'})
      models.product.belongsToMany(models.user,{through:'cart'})
    }
  };
  product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};