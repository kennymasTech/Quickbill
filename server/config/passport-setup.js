const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const initializePassport = (passport) => {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/googleauth/callback', // Adjust accordingly
  },
  (accessToken, refreshToken, profile, done) => {
    // Google authentication callback
    const user = {
      googleId: profile.id,
      email: profile.emails[0].value,
    };
    return done(null, user);
  }));

  // Serialize and deserialize user (optional)
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};

module.exports = initializePassport;