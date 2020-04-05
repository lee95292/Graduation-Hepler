const passport = require("passport"),
  GoogleStrategy = require("passport-google-oauth").OAuth2Strategy,
  session = require("express-session"),
  cookieParser = require("cookie-parser");

const config = require("../../config").google,
  GOOGLE_CLIENT_ID = config.CLIENT_ID,
  GOOGLE_CLIENT_SECRET = config.SECRET,
  GOOGLE_CALLBACK_URL = config.CALLBACK_URL;

passport.serializeUser((user, done) => {
  console.log("user ser", user);
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  console.log("obj, des", obj);
  done(null, obj);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL
    },
    function(accessTocken, refreshToken, profile, done) {
      console.log(
        `accessToken!! ${accessTocken}, refreshToken!! ${refreshToken}, profile!! ${profile}, done!! ${done}`
      );
      done(null, profile);
    }
  )
);

function onLoginSuccess() {}
exports.setup = app => {
  app.use(
    session({
      secret: "secret",
      resave: true,
      saveUninitialized: true,
      cookie: { secure: false, maxAge: 4 * 60 * 60 * 1000 }
    })
  );
  app.use(cookieParser("secret"));
  app.use(passport.initialize());
  app.use(passport.session());

  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["openid", "email", "profile"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    function(req, res) {
      console.log(req.isAuthenticated(), "test");

      res.redirect("/");
    }
  );

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/login");
  });
};
