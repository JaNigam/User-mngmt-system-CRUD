var Userdb = require('../model/model')

//create and save a new user
exports.create = (req, res) => {
    //with req.body we can access the contents of the form
    //if the form is empty
    if (!req.body) {
        //so if the form is empty-> a response will be sent with the below msg
        res.status(400).send({ message: "content cannot be empty!" });
        return;
    }

    //new user hence create and instance of the model and assign values to the parameters

    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    //now we need to save this user to the database
    //we need to user diffent methods hence we'll use the chaining system
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "error occured while creating the user!" });
        });

}

//retrive and return all users/ retrive and return single user
exports.find = (req, res) => {
    //we are going to use this fucntion to fetch the single user as well
    //we'll use the concept of queries

    if (req.query.id) {
        const id = req.query.id;
        Userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: `not found the user with id=${id}` })
                } else {
                    res.send(data);
                }
            })
            .catch(err => {
                res.status(500).send({ message: `error retriving the user with the id=${id}` })
            });

    } else {
        //return all the user in the db
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "error occured while retriving the user info" })
            })
    }

}

//update existin user by userid
//error 400 -> bad request, error from client side, server will not update info
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "data to update cannot be empty!" })
    }

    //we get the user id from the url with this->
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `cannot update the user with id: ${id}. Maybe user not found!` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "error update user information" })
        })


}

//delete a user with specified id
exports.delete = (req, res) => {
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `cannot Delete with ${id} maybe id is wrong!` })
            } else {
                res.send({
                    message: "user was deleted successfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({ message: "could not delete the user with id = " + id })
        })
}

