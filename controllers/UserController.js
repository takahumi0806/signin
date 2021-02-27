module.exports = {
  doGetUser: (req, res, next) => {
    res.render('index', {});
  },
  doSigninUser: (req, res, next) => {
    const name = req.body.userName;
    res.render('signin', {
      name: name,
    });
  },
};
