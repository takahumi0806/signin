module.exports = {
  doGetUser: (req, res, next) => {
    res.render('index', {});
  },
  doSigninUser: (req, res, next) => {
    res.render('signin', {});
  },
};
