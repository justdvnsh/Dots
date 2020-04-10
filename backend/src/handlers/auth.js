const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = () => {};

exports.signup = async function(req, res, next) {

    let user = new db.User({
        email: req.body.email,
        branch: req.body.branch,
        username: req.body.username,
        password: req.body.password,
        semester: req.body.semester
    });

    try {
      let { id, email, branch, username,semester } = await user.save();
      console.log(`user has been saved ${email}.`);
      let token = jwt.sign(
        {
          id,
          email,
          branch,
          semester
        },
        "adadadadasdasdasd"
      );
      console.log(`token has been made ${token}`);
      return res.status(200).json({
        id,
        branch,
        username,
        email,
        semester,
        token
      });
    } catch (err) {
      if (err.code === 11000) {
        err.message = "Sorry, that username and/or email is taken";
      }
      return next({
        status: 400,
        message: err.message
      });
    }
  };