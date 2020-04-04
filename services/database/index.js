const mongoose = require('mongoose');
require('dotenv').config();
const URL = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds145302.mlab.com:45302/chatbot`;
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
module.exports = db;
