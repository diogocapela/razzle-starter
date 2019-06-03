import express from 'express';
import passport from 'passport';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { Strategy as TwitterStrategy } from 'passport-twitter';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as GithubStrategy } from 'passport-github';
import { Strategy as BnetStrategy } from 'passport-bnet';
import controller from './controller';

const router = express.Router();

const defaultAPI = 'http://localhost:3000/oauth';

// Allowing passport to serialize and deserialize users into sessions
passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));

// The callback that is invoked when an OAuth provider sends back user
// information. Normally, you would save the user to the database
// in this callback and it would be customized for each provider
const callback = (accessToken, refreshToken, profile, cb) => cb(null, profile);

const GOOGLE_CONFIG = {
    clientID: process.env.GOOGLE_OAUTH_KEY,
    clientSecret: process.env.GOOGLE_OAUTH_SECRET,
    callbackURL: `${defaultAPI}/google/callback`,
};

const TWITTER_CONFIG = {
    consumerKey: process.env.TWITTER_OAUTH_KEY,
    consumerSecret: process.env.TWITTER_OAUTH_SECRET,
    callbackURL: `${defaultAPI}/twitter/callback`,
};

const FACEBOOK_CONFIG = {
    clientID: process.env.FACEBOOK_OAUTH_KEY,
    clientSecret: process.env.FACEBOOK_OAUTH_SECRET,
    profileFields: ['id', 'emails', 'name', 'picture.width(250)'],
    callbackURL: `${defaultAPI}/facebook/callback`,
};

const GITHUB_CONFIG = {
    clientID: process.env.GITHUB_OAUTH_KEY,
    clientSecret: process.env.GITHUB_OAUTH_SECRET,
    callbackURL: `${defaultAPI}/github/callback`,
};

const BNET_CONFIG = {
    clientID: process.env.BNET_OAUTH_KEY,
    clientSecret: process.env.BNET_OAUTH_SECRET,
    callbackURL: `${defaultAPI}/bnet/callback`,
    region: 'eu',
};

// Adding each OAuth provider's strategy to passport
passport.use(new GoogleStrategy(GOOGLE_CONFIG, callback));
passport.use(new TwitterStrategy(TWITTER_CONFIG, callback));
passport.use(new FacebookStrategy(FACEBOOK_CONFIG, callback));
passport.use(new GithubStrategy(GITHUB_CONFIG, callback));
passport.use(new BnetStrategy(BNET_CONFIG, callback));

// Setting up the passport middleware for each of the OAuth providers
const googleAuth = passport.authenticate('google', { scope: ['profile'] });
const twitterAuth = passport.authenticate('twitter');
const facebookAuth = passport.authenticate('facebook');
const githubAuth = passport.authenticate('github');
const bnetAuth = passport.authenticate('bnet');

// Routes that are triggered by the callbacks from each OAuth provider once
// the user has authenticated successfully
router.get('/google/callback', googleAuth, controller.google);
router.get('/twitter/callback', twitterAuth, controller.twitter);
router.get('/facebook/callback', facebookAuth, controller.facebook);
router.get('/github/callback', githubAuth, controller.github);
router.get('/bnet/callback', bnetAuth, controller.bnet);

// This custom middleware allows us to attach the socket id to the session
// with that socket id we can send back the right user info to the right socket
router.use((req, res, next) => {
    req.session.socketId = req.query.socketId;
    next();
});

// Routes that are triggered on the client
router.get('/google', googleAuth);
router.get('/twitter', twitterAuth);
router.get('/facebook', facebookAuth);
router.get('/github', githubAuth);
router.get('/bnet', bnetAuth);

export default router;
