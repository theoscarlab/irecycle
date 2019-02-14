process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const db = require('./server/config/mongoose').connect();
const { mongoose } = require('./server/config/mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');

const express = require('express');
const expressAMP = require('express-amp');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const compression = require('compression')
const pretty = require('express-prettify');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

/* const Ddos = require('ddos')
var ddos = new Ddos({burst:8,limit:13}) */

app.use(pretty({ query: 'pretty' }));

//app.use(ddos.express);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//gzip
app.use(compression())

/* app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); */

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(methodOverride());

/* app.use(function (req, res, next) {
  console.log("URL: "+req.url," IP: ",req.headers['x-forwarded-for'] || req.connection.remoteAddress)
  next()
}); */

app.use(session({
  saveUninitialized: false,
  resave: true,
  secret: 'config.sessionSecret',
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}));


app.use(express.static(path.join(__dirname, 'dist/searchfuse-web')));

//sockets
io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
  socket.on('message', function (msg) {
    io.emit('message', msg);
  });
});

const api = require('./server/modules');
api.init(app)
/* app.use('/', api); */

/* const payment = require('./server/routes/payment');
app.use('/pay', payment); */

const port = process.env.PORT || '80';
app.set('port', port);

/* var certOptions = {
  key: fs.readFileSync('privateKey.key'),
  cert: fs.readFileSync('certificate.crt')
} */
//const server = https.createServer(certOptions , app);

server.listen(port, () => console.log(`API running on localhost:${port}`));



module.exports = app;
