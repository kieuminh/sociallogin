const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
// const FacebookStrategy = require('passport-github2').Strategy;
const passport = require('passport');

const GOOGLE_CLIENT_ID = "747937590811-btefbtttmago7jj64r2kfkl31trda52s.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "ba49e1250abe1f52c60a";
GITHUB_CLIENT_SECRET = "690cef4f48171accfa8ffd94b6ec4973ab173ad4";


// FACEBOOK_CLIENT_ID = "ba49e1250abe1f52c60a";
// FACEBOOK_CLIENT_SECRET = "690cef4f48171accfa8ffd94b6ec4973ab173ad4";

passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);

passport.use(
    new GithubStrategy(
        {
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: "/auth/github/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);

// passport.use(
//     new FacebookStrategy(
//         {
//             clientID: FACEBOOK_CLIENT_ID,
//             clientSecret: FACEBOOK_CLIENT_SECRET,
//             callbackURL: "/auth/facebook/callback"
//         },
//         function(accessToken, refreshToken, profile, done) {
//             done(null, profile);
//         }
//     )
// );

passport.serializeUser((user,done) => {
    done(null,user)
})

passport.deserializeUser((user,done) => {
    done(null,user)
})



