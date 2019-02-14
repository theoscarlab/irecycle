const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/irecycle-db';

module.exports = {
  connect: function () {
    let db = {}
    try {
      db = mongoose.connect(uri,{ useCreateIndex: true,useNewUrlParser: true });
    } catch (error) {
      db = mongoose.createConnection(uri)
    }

    require('../modules/users/user.model');

    mongoose.connection.once('open', () => {
      console.log('MongoDB Running')
    }).on('error', e => {
      console.error(e);
    })

    return db;
  },
  mongoose: mongoose
}