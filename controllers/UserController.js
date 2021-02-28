module.exports = {
  doGetUser: (req, res, error) => {
    res.render('index', {
      errorMessage: error,
    });
  },
  doSigninUser: (req, res) => {
    const name = req.body.userName;
    res.render('signin', {
      name: name,
    });
  },
};
