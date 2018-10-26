const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const express = require('express');

passport.use(new TwitterStrategy({
    consumerKey: 'h1GvdyiL0calIkbWFJMo2xLRp',
    consumerSecret: 'gTGbqknsKQQQ1gHkVkQ8Z4ts2GJ24CmnxrsJbxtSItoOgWUM8p',
    callbackURL: 'http://localhost:3000/auth/twitter/callback'
  },
  function(token, tokenSecret, profile, cb) {
    return cb(null, profile);
}));

passport.serializeUser(function(user, callback) {
    callback(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

const app = express();

//INITIALIZE PASSPORT 
app.use(passport.initialize());
app.use(passport.session());


//ROUTES
app.get('/', (req, res) => {
    res.render('home', {user: req.user});
});

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

app.listen(3000);
console.log('Server started on port 4000')