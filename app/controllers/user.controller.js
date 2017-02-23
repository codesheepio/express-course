exports.login = function(req, res) {
  res.render('index', {
    title: 'Logged in as ' + req.body.email,
    isLoggedIn: true,
  })
}
