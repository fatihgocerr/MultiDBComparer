const mongoose = require('mongoose')
const db1 = mongoose.createConnection('mongodb://127.0.0.1:27017/person_a', {
 useNewUrlParser: true,
 useUnifiedTopology: true,
});

module.exports = db1