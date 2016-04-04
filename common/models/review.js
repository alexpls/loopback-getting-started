module.exports = function(Review) {
  'use strict'

  Review.beforeRemote('create', function(context, user, next) {
    let req = context.req;
    req.body.date = Date.now()
    req.body.publisherId = req.accessToken.userId
    next()
  })
};
