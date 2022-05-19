const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

exports.connect = () => {
    console.log(MONGO_URI)
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        authSource: 'admin',
        auth: { username: 'root', password: 'root' },
        driverInfo: { name: 'Mongoose', version: '6.3.3' }
    })
    .then(() => {
        console.log("connected to database")
    })
    .catch((error) => {
        console.log("error connecting")
        console.error(error)
        process.exit(1)
    });
}

