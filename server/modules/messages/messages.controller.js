
const Message = require('./messages.model')
const moment = require('moment');

exports.allMessages = async function (req, res, query) {
  if (req.session) {
    let tr = await Message.find()

    return res.status(200).json(tr);
  }
}

exports.messages = async function (req, res, query) {
  if (req.session) {
    let tr = await Message.find({ userId: req.session.userId })

    return res.status(200).json(tr);
  }
}

exports.messagesByTransaction = async function (req, res, query) {
  if (req.session) {
    let tr = await Message.find({ transactionId: req.body.id })

    return res.status(200).json(tr);
  }
}

exports.messageByID = async function (req, res, query) {
  if (req.session) {
    let tr = await Message.findById(req.body._id)
    return res.status(200).json(tr);
  }
}

exports.messageByIDAdmin = async function (req, res, query) {
  if (req.session) {
    let tr = await Message.find({ userId: req.session.userId, isAdmin: true })
    return res.status(200).json(tr);
  }
}

exports.messageByIDNoAdmin = async function (req, res, query) {
  if (req.session) {
    let tr = await Message.find({isAdmin: false })
    return res.status(200).json(tr);
  }
}

exports.sendMessage = async function (req, res, query) {
  if (req.session) {
    let tr = await Message.create(req.body)
    return res.status(200).json(tr);
  }
}

exports.closeMessage = async function (req, res, query) {
  if (req.session) {
    let tr = await Message.findOneAndUpdate({ "_id": req.body._id }, { read: false })
    return res.status(200).json(tr);
  }
}

exports.openMessage = async function (req, res, query) {
  if (req.session) {
    let tr = await Message.findOneAndUpdate({ "_id": req.body._id }, { read: true })
    return res.status(200).json(tr);
  }
}