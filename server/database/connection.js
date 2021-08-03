//using mongoose we can connect the mongodb database to the application
const mongoose = require('mongoose');

//Learn async and await function
const connectDB = async () => {
    try {
        //mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected:${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

//lines 9-12 helps to avoid unecessary warnings need to learn

module.exports = connectDB