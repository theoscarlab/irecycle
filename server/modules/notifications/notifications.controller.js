
const Notification = require('./notifications.model')
const moment = require('moment');

exports.allNotifications = async function (req, res, query) {
  if (req.session) {
    let tr = await Notification.find()

    return res.status(200).json(tr);
  }
}

exports.notifications = async function (req, res, query) {
  if (req.session) {
    let tr = await Notification.find({ userId: req.session.userId })

    return res.status(200).json(tr);
  }
}

exports.notificationsByTransaction = async function (req, res, query) {
  if (req.session) {
    let tr = await Notification.find({ transactionId: req.body.id })

    return res.status(200).json(tr);
  }
}

exports.notificationByID = async function (req, res, query) {
  if (req.session) {
    let tr = await Notification.findById(req.body._id)
    return res.status(200).json(tr);
  }
}

exports.notificationByIDAdmin = async function (req, res, query) {
  if (req.session) {
    let tr = await Notification.find({ userId: req.session.userId, isAdmin: true })
    return res.status(200).json(tr);
  }
}

exports.notificationByIDNoAdmin = async function (req, res, query) {
  if (req.session) {
    let tr = await Notification.find({isAdmin: false })
    return res.status(200).json(tr);
  }
}

exports.sendNotification = async function (req, res, query) {
  if (req.session) {
    let tr = await Notification.create(req.body)
    return res.status(200).json(tr);
  }
}

exports.closeNotification = async function (req, res, query) {
  if (req.session) {
    let tr = await Notification.findOneAndUpdate({ "_id": req.body._id }, { read: false })
    return res.status(200).json(tr);
  }
}

exports.openNotification = async function (req, res, query) {
  if (req.session) {
    let tr = await Notification.findOneAndUpdate({ "_id": req.body._id }, { read: true })
    return res.status(200).json(tr);
  }
}