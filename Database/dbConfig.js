const mongoose = require('mongoose');

const BASE_URL = process.env.NODE_ENVIRONMENT === 'development'
 ? `mongodb://127.0.0.1:27017/${process.env.DEVELOPMENT_MONGODB_DBNAME}`
 : `mongodb+srv://${process.env.PRODUCTION_MONGODB_USERNAME}:${process.env.PRODUCTION_MONGODB_PASSWORD}@cluster0.riyqjnx.mongodb.net/${process.env.PRODUCTION_MONGODB_DBNAME}`;


mongoose.connect(BASE_URL).then((response) => {
    if(response) {
        console.log("DATABASE CONNECTION SUCCESSFUL");
    } else {
        console.log("SOMETHING WENT WRONG")
    }
}).catch((err) => {
    if(err) {
        console.log("ERROR CONNECTING TO DATABASE", err);
    } else {
        console.log("SOMETHING WENT WRONG")
    }
});