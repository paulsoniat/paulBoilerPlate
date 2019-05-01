const Sequelize = require('sequelize');
const sequelize = require('./index')
module.exports = {
    User : sequelize.define('user', {
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: true
      }
    })
}