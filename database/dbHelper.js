const models = require('./models');
require('./associations');
module.exports = {
    createUser: function createUser(req, res) {
      models.User.findOrCreate({
        where: {
          firstName: `${req.body.firstName}`,
          lastName: `${req.body.lastName}`
      }
      })
    },
    findAllUsers: function findAllUsers(req, res) {
      let users = new Promise (function(resolve, reject) {
        resolve(models.User.findAll())
      })
      return users
    }
}