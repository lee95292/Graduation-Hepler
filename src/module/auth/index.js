const passport = require("passport"),
  GoogleStrategy = require("passport-google-oauth").OAuth2Strategy,
  session = require("express-session");

const config = require("../../../config").google,
  GOOGLE_CLIENT_ID = config.CLIENT_ID,
  GOOGLE_CLIENT_SECRET = config.SECRET,
  GOOGLE_CALLBACK_URL = config.CALLBACK_URL;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
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
      process.nextTick(() => {
        return done(null, profile);
      });
    }
  )
);

exports.setup = app => {
  app.use(session({ secret: "secret" }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["openid", "email"] }),
    function(req, res) {
      // The request will be redirected to Google for authentication, so this
      // function will not be called.
    }
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    function(req, res) {
      console.log(req.query);
      res.redirect("/");
    }
  );

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/login");
  });
};
