const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

const MONGO_USERNAME = "divyansh";
const MONGO_PASSWORD = "Messi 10";
const MONGO_HOSTNAME = "127.0.0.1";
const MONGO_PORT = "27017";
const MONGO_DB = "quizme";

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, {useNewUrlParser: true, keepAlive: true});
module.exports.User = require("./User");