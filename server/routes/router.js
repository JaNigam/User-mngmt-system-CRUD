const express = require('express');
// we will not use const app = express()
// since this will create a new app which we don't want
//instead we will call a method of express

const route = express.Router()
//hence insead of app.get(..) we will use route.get(..)
//and then we can import this router file in the server file

const services = require('../services/render')

const controller = require('../controller/controller');

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


//API
//a post request to create user
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
//when we call this put method we need to specify the id 
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

//before using it in the server file we need to export the route variable
module.exports = route