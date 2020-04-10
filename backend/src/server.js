const db = require("./db");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User");
const bodyParser = require("body-parser");
const app = require("express")();

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
// passport.use(new LocalStrategy(User.authenticate()));

app.post("/register", (request, response) => {

    // console.log(request.body);
    // creating user
    let user = new User({
        email: request.body.email,
        branch: request.body.branch,
        semester: request.body.semester,
        password: request.body.password
    });

    new User(user).save((err, result) => {
        if (err) console.log(err)
        if (result) response.json(result);
    })

});

app.listen(3000, () => {
    console.log("Server Started")
})