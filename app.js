const express = require('express');
const app = express();
const router = express.Router();
const userController = require('./controllers/UserController');

const server = app.listen(3000, function () {
  console.log('Node.js is listening to PORT:' + server.address().port);
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', userController.doGetUser);
app.get('/signin', userController.doSigninUser);

module.exports = router;
