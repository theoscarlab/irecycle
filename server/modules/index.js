const path = require('path')
const fs = require('fs')
const planController = require('./plans/plan.controller')
const Plan = require('./plans/plan.model')
const Transaction = require('./transactions/transaction.model')
const userController = require('./users/user.controller')
const transactionController = require('./transactions/transaction.controller')
const messagesController = require('./messages/messages.controller')
const notificationsController = require('./notifications/notifications.controller')
const paymentController = require('./payments/payment.controller')
const mapController = require('./qatarMaps/maps.controller')
const userValidation = require('./users/user.validations')
const express = require('express');
const validate = require('express-validation')
const router = express.Router();
const meta = require('../config/meta')

const API_URL = "/api/v1"

exports.init = app => {
  router.route('/map').post(mapController.fetchMap);

  router.route('/plans').post(planController.plans);
  router.route('/plansMin').post(planController.plansMin);
  router.route('/planID').post(planController.planID);
  router.route('/planTitle').post(planController.planTitle);
  router.route('/view').post(planController.view);
  router.route('/savePlan').post(planController.savePlan);

  router.route('/user').post(validate(userValidation.signup), userController.signUp);
  router.route('/updateUser').post(userController.update);
  router.route('/allUser').post(userController.users);
  router.route('/changePass').post(userController.changePass);
  router.route('/changePassCode').post(userController.changePassCode);
  router.route('/resetPassEmail').post(userController.resetPassEmail);
  router.route('/login').post(validate(userValidation.login), userController.login);
  router.route('/logout').post(userController.logout);
  router.route('/status').post(userController.status);
  router.route('/checkCode').post(userController.checkCode);
  router.route('/toAceptEmailVerification').post(userController.toAceptEmailVerification);
  router.route('/toAdmin').post(userController.toAdmin);
  router.route('/createOrder').post(userController.createOrder);
  router.route('/completedOrder').post(userController.completedOrder);

  router.route('/transactionByID').post(transactionController.transactionByID);
  router.route('/transactions').post(transactionController.transactions);
  router.route('/allTransactions').post(transactionController.allTransactions);
  router.route('/createTransaction').post(transactionController.createTransaction);
  router.route('/removeTransaction').post(transactionController.removeTransaction);

  router.route('/sendMessage').post(messagesController.sendMessage);
  router.route('/messages').post(messagesController.messages);
  router.route('/messagesByTransaction').post(messagesController.messagesByTransaction);
  router.route('/messageByIDAdmin').post(messagesController.messageByIDAdmin);
  router.route('/messageByIDNoAdmin').post(messagesController.messageByIDNoAdmin);
  router.route('/closeMessage').post(messagesController.closeMessage);
  router.route('/openMessage').post(messagesController.openMessage);

  router.route('/sendNotification').post(notificationsController.sendNotification);
  router.route('/notifications').post(notificationsController.notifications);
  router.route('/notificationsByTransaction').post(notificationsController.notificationsByTransaction);
  router.route('/notificationByIDAdmin').post(notificationsController.notificationByIDAdmin);
  router.route('/notificationByIDNoAdmin').post(notificationsController.notificationByIDNoAdmin);
  router.route('/closeNotification').post(notificationsController.closeNotification);
  router.route('/openNotification').post(notificationsController.openNotification);

  router.route('/orderRequirements').post(transactionController.orderRequirements);
  router.route('/requirementsAcepted').post(transactionController.requirementsAcepted);
  router.route('/orderCompleted').post(transactionController.orderCompleted);
  router.route('/rateOrder').post(transactionController.rateOrder);

  router.route('/authorizingPayment').post(paymentController.authorizingPayment);

  app.use(API_URL, router)

  app.get('/plan/:planid/thank-you', (req, res) => {
    const filePath = path.resolve(path.join(__dirname, '../../views/thank-you.html'));
    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      Plan.findOne({ id: req.params.planid }).then(plan => {
        if (plan) {
          Transaction.findOne({}).sort({ $natural: -1 }).then(tr => {
            Transaction.find({}).then(size => {
              if (tr) {
                data = data.replace('<script id="dataLayer"></script>', `
            <script>
  
            dataLayer = [{
              'transactionID': '${tr._id}', //javascript random number after T
              'transactionAffiliation': 'Searchfuse Marketing', //static searcfuse marketing
              'transactionTotal	': ${plan.price}, //total price that includes 5%
              'transactionTax	': ${plan.price * 0.05}, //5% of the product price
              'coupon': 'SUMMER20',
              'transactionProducts': [{
                'sku': 'P${size.length}', //category name with no space + incremental number
                'name': ${plan.title}, // product name
                'category': 'Social Media', //category name
                'price': ${plan.price - (plan.price * 0.05)}, // total price minus 5%
                'quantity': 1//quantity
              }] 
            }];
          </script>
            `);

                res.send(data);
              }
            }).catch(error => {
              console.error("e2", error);
            })
          }).catch(error => {
            console.error("e1", error);

          })
        }

      }).catch(console.error)
    })
    //res.sendFile(path.join(__dirname, '../../dist/searchfuse-web/index.html'));
  });

  app.get('/plan/:planid', (req, res) => {
    const filePath = path.resolve(path.join(__dirname, '../../dist/searchfuse-web/index.html'));
    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      Plan.findOne({ id: req.params.planid }).then(pageMeta => {
        if (pageMeta) {
          data = data.replace("<title>On-demand Digital Marketers - Searchfuse</title>", '<title>' + pageMeta.metaTitle + '</title>');
          data = data.replace('<meta name="description" content="Searchfuse is a growth hacker marketplace for on-demand marketing service providers. In just a few clicks, you can get expert digital marketers support your digital marketing needs."', '<meta name="description" content="' + pageMeta.metaDescription + '"');
        }
        res.send(data);
      }).catch(console.error)
    })
    //res.sendFile(path.join(__dirname, '../../dist/searchfuse-web/index.html'));
  });


  app.get('/sitemap.xml', (req, res) => {
    Plan.find().then(plans => {
      let urls = ``

      if (plans.length > 0) {
        plans.forEach(element => {
          urls += `
        <url>
          <loc>https://searchfuse.com/plan/${element.id}</loc>
          <lastmod>2018-11-26</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.9</priority>        
          <image:image>
            <image:loc>
            https://searchfuse.com/assets/img/plans/${element.id}.jpg
            </image:loc>
            <image:title>${element.title.replace(/\s/g, '').replace(/\&/g, '')}</image:title>
            <image:caption>${element.title.replace(/\s/g, '').replace(/\&/g, '')}</image:caption>
          </image:image>
        </url>
        `
        });
      }

      let sitemapICOText = `<!--
    Created using XmlSitemapGenerator.org - Free HTML, RSS and XML sitemap generator
    -->
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <url>
      <loc>https://searchfuse.com/</loc>
      <lastmod>2018-11-26</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    ${urls}
    </urlset>
    `
      fs.writeFile("sitemap.xml", sitemapICOText, "utf-8", () => {
        res.sendFile(path.resolve("sitemap.xml"));
      })
    })
  });

  app.get('*', (req, res) => { // Searchfuse : On - Demand Digital Marketers for Startups    
    res.sendFile(path.join(__dirname, '../../dist/searchfuse-web/index.html'));
  });
}