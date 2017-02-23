const User = require('mongoose').model('User')

exports.create = function(req, res, next) {
  const user = new User(req.body)

  user.save(function(err) {
    if (err) {
      return next(err)
    } else {
      res.json(user)
    }
  })
}


exports.login = function(req, res) {
  req.checkBody('email', 'Email cannot be empty').notEmpty()
  req.checkBody('email', 'Invalid email').isEmail()
  req.sanitizeBody('email').normalizeEmail()
  const errors = req.validationErrors()
  if (errors) {
    res.render('index', {
      title: 'There have been validation errors: ' + JSON.stringify(errors)
    })
    return
  }

  if (req.body.remember === 'remember') {
    req.session.remember = true
    req.session.email = req.body.email
  }

  res.render('index', {
    title: 'Logged in as ' + req.body.email,
    isLoggedIn: true,
  })
}

exports.logout = function(req, res) {
  req.session = null

  res.render('index', {
    title: 'See you again later',
    isLoggedIn: false,
  })
}
