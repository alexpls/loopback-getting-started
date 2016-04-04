module.exports = function(CoffeeShop) {

  'use strict'

  CoffeeShop.status = function(cb) {
    const OPEN_HOUR = 6,
          CLOSE_HOUR = 20;

    let currentDate = new Date(),
        currentHour = currentDate.getHours()

    console.log(`Current hour is ${currentHour}`)

    let response;
    if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = "We're open for business."
    } else {
      response = "Sorry, we're closed."
    }

    cb(null, response)
  }

  CoffeeShop.getName = function(shopId, cb) {
    CoffeeShop.findById(shopId, function(err, instance) {
      let response = `Name of coffee shop is ${instance.name}`
      cb(null, response)
      console.log(response)
    })
  }

  CoffeeShop.remoteMethod(
    'status',
    {
      http: {path: '/status', verb: 'get'},
      returns: {arg: 'status', type:'string'}
    }
  )

  CoffeeShop.remoteMethod(
    'getName',
    {
      http: {path: '/getname', verb: 'get'},
      accepts: {arg: 'id', type: 'number', http: {source: 'query'}},
      returns: {arg: 'name', type: 'string'}
    }
  )

};
