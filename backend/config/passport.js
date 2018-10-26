const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;


passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done){
    done(null, user);
});

// Google passport
passport.use(
    new GoogleStrategy(
        {
            clientID: '',
            clientSecret: '',
            callbackURL: 'http://localhost:4000/auth/google/callback'
        },
        function(accessToken, refreshToken, profile, done) {
            let userData = {
                email: profile.emails[0].value,
                name: profile.displayName,
                token: accessToken
            };
            done(null, userData);
        }
    )
);

// Twitter passport
passport.use(
    new TwitterStrategy(
        {
            consumerKey: '',
            consumerSecret: '',
            callbackURL: 'http://localhost:4000/auth/twitter/callback'
        },
        function(accessToken, refreshToken, profile, done) {
            let userData = {
                name: profile.displayName,
                token: accessToken
            };
            done(null, userData);
        }
    )
);

// Facebook passport
// passport.use(
//     new FacebookStrategy(
//         {
//             clientID: '',
//             clientSecret: '',
//             callbackURL: 'http://localhost:4000/auth/facebook/callback'
//         },
//         function(token, tokenSecret, profile, done) {
//         return done(null, profile);
//         }
//     )
// );

// Instagram passport
// passport.use(
//     new InstagramStrategy(
//         {
//             clientID: '',
//             clientSecret: '',
//             callbackURL: 'http://localhost:4000/auth/instagram/callback'
//         },
//         function(token, tokenSecret, profile, done) {
//         return done(null, profile);
//         }        
//     )
// );