module.exports = function(app) {
  const user = require('../controllers/user.controller')

  app.post('/login', user.login)
}