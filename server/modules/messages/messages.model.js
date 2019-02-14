const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  userId: {
    type: String,
    trim: true,
  },
  fromName: {
    type: String,
    trim: true,
  },
  transactionId: {
    type: String,
    trim: true,
  },
  text: {
    type: String,
    trim: true,
  },  
  isAdmin: {
    type: Boolean,
    default: false,
  },  
  read: {
    type: Boolean,
    default: false,
  },  
  date: {
    type: Date,
    default: new Date()
  }
});



module.exports = mongoose.model('Message', MessageSchema);