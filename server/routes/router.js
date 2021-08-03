const express = require('express');
// we will not use const app = express()
// since this will create a new app which we don't want
//instead we will call a method of express

const route = express.Router()
//hence insead of app.get(..) we will use route.get(..)
//and then we can import this router file in the server file

const services = require('../services/render')



//when we route to the root page
/**
 * @description Root Route
 * @method GET /
 */
route.get('/', services.homeRoutes)

/**
 * @description add Route
 * @method GET /
 */
route.get('/add-user', services.addUser)

/**
 * @description update Route
 * @method GET /
 */
route.get('/update-user', services.updateUser)

//before using it in the server file we need to export the route variable
module.exports = route