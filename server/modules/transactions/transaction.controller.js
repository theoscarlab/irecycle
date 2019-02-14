
const Transaction = require('../transactions/transaction.model')
const moment = require('moment');

exports.allTransactions = async function (req, res, query) {
  if (req.session) {
    let tr = await Transaction.find()

    return res.status(200).json(tr);
  }
}

exports.transactions = async function (req, res, query) {
  if (req.session) {
    let tr = await Transaction.find({ email: req.session.email })
    return res.status(200).json(tr);
  }
}

exports.transactionByID = async function (req, res, query) {
  if (req.session) {
    let tr = await Transaction.findById(req.body._id)
    return res.status(200).json(tr);
  }
}

exports.removeTransaction = async function (req, res, query) {
  if (req.session) {
    let tr = await Transaction.remove({ _id: req.body._id })
    return res.status(200).json(tr);
  }
}

exports.createTransaction = async function (req, res, query) {
  if (req.session) {
    let tr = await Transaction.create(req.body)
    return res.status(200).json(tr);
  }
}

exports.orderRequirements = async function (req, res, query) {
  if (req.session) {
    let tr = await Transaction.findOneAndUpdate({ "_id": req.body._id }, { "order.requirements": req.body.requirements })
    return res.status(200).json(tr);
  }
}

exports.requirementsAcepted = async function (req, res, query) {
  if (req.session) {
    let tr = await Transaction.findOneAndUpdate({ "_id": req.body._id }, { "order.requirementsAcepted": true, delivery: moment().add(1, 'months') })
    return res.status(200).json(tr);
  }
}

exports.orderCompleted = async function (req, res, query) {
  if (req.session) {
    let tr = await Transaction.findOneAndUpdate({ "_id": req.body._id }, { "order.orderComplete": true, status: "Completed" })
    return res.status(200).json(tr);
  }
}

exports.rateOrder = async function (req, res, query) {
  if (req.session) {
    let tr = await Transaction.findOneAndUpdate({ "_id": req.body._id }, { "order.rating": req.body.rating, "order.feedback": req.body.feedback })
    return res.status(200).json(tr);
  }
}