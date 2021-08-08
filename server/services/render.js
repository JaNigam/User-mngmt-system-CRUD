//this file will allow us to render differnt files using route
//this module allows us to make a request
const axios = require('axios');
const { response } = require('express');

exports.homeRoutes = (req, res) => {
    //make a get request to -> /api/users
    axios.get('https://user-mngmt-crud.herokuapp.com/api/users')
        .then(function (response) {
            res.render('index', { users: response.data });
        })
        .catch(err => {
            res.send(err);
        })

}

exports.addUser = (req, res) => {
    res.render('add_user')
}

exports.updateUser = (req, res) => {
    axios.get('https://user-mngmt-crud.herokuapp.com/api/users', { params: { id: req.query.id } })
        .then(function (userdata) {
            res.render("update_user", { user: userdata.data })
        })
        .catch(err => {
            res.send(err);
        })
}