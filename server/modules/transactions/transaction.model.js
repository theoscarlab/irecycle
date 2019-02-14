const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  requirements: String,
  requirementsAcepted:{
    type: Boolean,
    default: false
  },
  orderComplete: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: 0
  },
  feedback: String,
  invoice: Array,
  delivery: {
    type: Date,
    default: moment().add(1, 'months')
  },
});

const TransactionSchema = new Schema({
  userId: {
    type: String,
    trim: true,
  },
  plan: {
    type: String,
    trim: true,
  },
  price: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  coin: {
    type: String,
    trim: true,
  },
  userAddress: {
    type: String,
    trim: true,
  },
  amountPaid: {
    type: String,
    trim: true,
  },
  date: {
    type: Date,
    default: new Date()
  },
  card: Object,
  data: Object,
  status: {
    type: String,
    trim: true,
  },
  order: OrderSchema,
});



module.exports = mongoose.model('Transaction', TransactionSchema);