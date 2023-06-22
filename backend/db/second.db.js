const mongoose = require('mongoose')

const db2 = mongoose.createConnection('mongodb://127.0.0.1:27017/person_b', {
 useNewUrlParser: true,
 useUnifiedTopology: true,
});

module.exports = db2