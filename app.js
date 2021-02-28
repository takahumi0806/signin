const express = require('express');
const app = express();
const router = express.Router();
const userController = require('./controllers/UserController');
const bodyParser = require('body-parser');
const userRegistValidator = require('./validators/userRegistValidator');
const { validationResult } = require('express-validator');

app.use(bodyParser.urlencoded({ extended: false }));
const server = app.listen(3000, function () {
  console.log('Node.js is listening to PORT:' + server.address().port);
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', userController.doGetUser);
app.post('/signin', userRegistValidator, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errors_array = errors.array();
    res.render('./index', userController.doGetUser(req, res, errors_array));
  } else {
    res.render('./signin', userController.doSigninUser(req, res));
  }
});

module.exports = router;
