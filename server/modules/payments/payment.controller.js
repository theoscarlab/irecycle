const request = require("request")
const User = require('../users/user.model')
const Transaction = require('../transactions/transaction.model')
const Sg = require('../../scripts/Sendgrid')

exports.authorizingPayment = function (req, res, query) {
  //if (req.body.id) {
  request(
    {
      //url: 'https://sandbox.checkout.com/api2/v2/charges/token',
      url: 'https://api2.checkout.com/v2/charges/token',
      headers: {
        'Content-Type': 'application/json',
        //'Authorization': 'sk_test_a8a67dac-cfcb-47a4-908b-ab541d92c163',
        'Authorization': 'sk_b56f17d8-67e8-4471-afa5-14a77025c7b4',
      },
      method: 'POST',
      json: {
        "email": req.body.email,
        "value": req.body.value,
        "currency": req.body.currency,
        "cardToken": req.body.cardToken,
        "autoCapture": 'y',
      }
    }, async function (error, response, body) {
      //console.log('body:', body); // Print the HTML for the Google homepage.
      res.status(200).json(body);
      //if (body.status !== 'Declined') {
      Transaction.create({
        userId: req.session && req.session.userId ? req.session.userId : "none",
        status: body.status,
        plan: req.body.plan,
        price: body.value,
        email: req.body.email,
        coin: body.currency,
        userAddress: req.body.userAddress,
        amountPaid: body.value,
        date: new Date(),
        card: body.card,
        data: body
      });
      //if (body.status !== 'Declined') {
      //console.log("correo:", req.body.email)
      User.find({ email: req.body.email }).then(user => {
        //console.log("user", user)
        if (user.length > 0) {
          Sg.thanksForBuyingUser(req.body.email, user[0].firstName)
        } else {
          Sg.thanksForBuying(req.body.email)
        }
      }).catch(error => {
        console.log(error)
      });
      //}
      //}
    });
  /* } else {
    res.status(400).send("Missing parameters");
  } */
}