const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const randomstring = require("randomstring");

const PlanSchema = new Schema({
  image: {
    type: String,
    default: "../images/screenshots/_1481132909.jpg"
  },
  title: {
    type: String
  },
  reviews: {
    type: String
  },
  description: {
    type: String
  },
  minDescription: {
    type: String
  },
  minReviews: {
    type: String
  },
  expect: {
    type: Array
  },
  need: {
    type: Array
  },
  faq: {
    type: Array
  },
  comment: {
    type: Array
  },
  faqObj: {
    type: Array
  },
  price: {
    type: Number
  },
  metaTitle: {
    type: String
  },
  metaDescription: {
    type: String
  },
  classification: {
    type: String
  },
  views: {
    type: Number,
    default: 0
  },
  viewsStore: {
    type: Array
  },
  id: {
    type: String
  },
});

module.exports = mongoose.model('Plan', PlanSchema);