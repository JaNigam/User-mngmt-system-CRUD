//this file will allow us to render differnt files using route

exports.homeRoutes = (req, res) => {
    res.render('index');
}

exports.addUser = (req, res) => {
    res.render('add_user')
}

exports.updateUser = (req, res) => {
    res.render('update_user')
}