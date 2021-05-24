'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.place.hasMany(models.comment)
    }
  };
  place.init({
    title: DataTypes.TEXT,
    content: DataTypes.TEXT,
    countyName: DataTypes.TEXT,
    categoryName: DataTypes.TEXT,
    image: DataTypes.TEXT,
    image2: DataTypes.TEXT,
    image3: DataTypes.TEXT,
    image4: DataTypes.TEXT,
    image5: DataTypes.TEXT,
    image6: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'place',
  });
  return place;
};