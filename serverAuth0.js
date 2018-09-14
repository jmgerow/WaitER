var session = require("express-session");

//session-related stuff
var sess = {
    secret: "SHHHHHHHHH",
    cookie: {},
    resave: false,
    saveUninitialized: true
};

if (app.get("env") === "production") {
    sess.cookie.secure = true; // serve secure cookies, requires https
}

app.use(session(sess));

var Auth0Strategy = require("passport-auth0"),
    passport = require("passport");

//passport-auth0
var strategy = new Auth0Strategy({
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET, // Replace this with the client secret for your app
    callbackURL: process.env.AUTH0_CALLBACK_URL || "http://localhost:3000/callback"
},
    function (accessToken, refreshToken, extraParams, profile, done) {
        // accessToken is the token to call Auth0 API (not needed in the most cases)
        // extraParams.id_token has the JSON Web Token
        // profile has all the information from the user
        return done(null, profile);
    }
);

passport.use(strategy);

app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

var authRouter = require('./routes/authRoutes');

app.use(function(req, res, next) {
    res.locals.loggedIn = false;
    if (req.session.passport && typeof req.session.passport.user != 'undefined') {
      res.locals.loggedIn = true;
    }
    next();
  });

app.use('/', authRouter);