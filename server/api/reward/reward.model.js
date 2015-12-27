'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Reward', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: 'User',
      referencesKey: '_id'
    },
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  });
};
