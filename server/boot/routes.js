module.exports = function(app) {
  // Install a "/ping" route that responds "pong"
  app.get('/ping', function(req, res) {
    res.send('pong')
  })
}
