'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Content', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    caption: DataTypes.STRING,
    thumbUrl: DataTypes.STRING,
    medUrl: DataTypes.STRING,
    fullUrl: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  });
};
