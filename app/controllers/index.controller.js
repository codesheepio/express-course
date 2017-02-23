exports.render = function(req, res) {
  let isLoggedIn = false

  if (typeof req.session.remember !== 'undefined') {
    isLoggedIn = req.session.remember
  }

  res.render('index', {
    'title': 'Hello World',
    'message': 'How are things',
    'isLoggedIn': isLoggedIn,
  })
}
