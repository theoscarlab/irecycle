
const elements = require('../../config/elements')
const planlist = require('../../config/planlist')
const Plan = require('./plan.model')

exports.plans = async function (req, res, query) {
  let plan = await Plan.find()
  res.status(200).json(plan);
}

exports.plansMin = async function (req, res, query) {
  res.status(200).json(await Plan.find());
}

exports.planID = async function (req, res, query) {
  if (req.body.id) {
    //res.status(200).json(elements.filter(e => e.id === req.body.id));
    return res.status(200).json(await Plan.find({ id: req.body.id }));
  } else {
    return res.status(400).send("Missing parameters");
  }
}

exports.view = async function (req, res, query) {
  if (req.body.id) {
    //res.status(200).json(elements.filter(e => e.id === req.body.id));
    return res.status(200).json(await Plan.updateOne({ id: req.body.id }, { $inc: { views: 1 } }));
  } else {
    return res.status(400).send("Missing parameters");
  }
}

exports.planTitle = async function (req, res, query) {
  if (req.body.title) {
    //res.status(200).json(elements.filter(e => e.title === req.body.title));
    return res.status(200).json(await Plan.find({ title: req.body.title }));
  } else {
    return res.status(400).send("Missing parameters");
  }
}

exports.savePlan = async function (req, res, query) {
  if (req.body.id) {
    //res.status(200).json(elements.filter(e => e.title === req.body.title));
    return res.status(200).json(await Plan.updateOne({ id: req.body.id }, req.body));
  } else {
    return res.status(400).send("Missing parameters");
  }
}