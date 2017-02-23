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

  res.render('index', {
    title: 'Logged in as ' + req.body.email,
    isLoggedIn: true,
  })
}

exports.logout = function(req, res) {
  res.render('index', {
    title: 'See you again later',
    isLoggedIn: false,
  })
}
