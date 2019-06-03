import {
    buildUserFromGoogle,
    buildUserFromTwitter,
    buildUserFromFacebook,
    buildUserFromGithub,
    buildUserFromBnet,
} from './builder';

const callbackHTML = '<script>close();</script>';

export default {
    google: (req, res) => {
        const io = req.app.get('io');
        // console.log(req.user);
        const user = buildUserFromGoogle(req.user);
        io.in(req.session.socketId).emit('google_oauth_login', user);
        res.send(callbackHTML);
    },
    twitter: (req, res) => {
        const io = req.app.get('io');
        // console.log(req.user);
        const user = buildUserFromTwitter(req.user);
        io.in(req.session.socketId).emit('twitter_oauth_login', user);
        res.send(callbackHTML);
    },
    facebook: (req, res) => {
        const io = req.app.get('io');
        // console.log(req.user);
        const user = buildUserFromFacebook(req.user);
        io.in(req.session.socketId).emit('facebook_oauth_login', user);
        res.send(callbackHTML);
    },
    github: (req, res) => {
        const io = req.app.get('io');
        // console.log(req.user);
        const user = buildUserFromGithub(req.user);
        io.in(req.session.socketId).emit('github_oauth_login', user);
        res.send(callbackHTML);
    },
    bnet: (req, res) => {
        const io = req.app.get('io');
        // console.log(req.user);
        const user = buildUserFromBnet(req.user);
        io.in(req.session.socketId).emit('bnet_oauth_login', user);
        res.send(callbackHTML);
    },
};
