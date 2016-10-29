'use strict';
/**
 * Created by FrankTsai on 2016/7/3.
 */
module.exports = function (sequelize, DataTypes) {
  const pageviews = sequelize.define('PageViews', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    session: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    user_agent: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    ip: {
      type: DataTypes.STRING,
    },
    page: {
      allowNull: true,
      type: DataTypes.STRING,
      defaultValue: ''
    },
    host: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    referral: {
      type: DataTypes.STRING,
    },
    utm_source: {
      type: DataTypes.STRING,
    },
    start_time: {
      type: DataTypes.STRING,
    },
    OtherCanRead: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    classMethods: {

    },
    freezeTableName: true,
  });
  return pageviews;
}
