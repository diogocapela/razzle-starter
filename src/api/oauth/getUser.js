import {
    buildUserFromBnet,
    buildUserFromFacebook,
    buildUserFromGithub,
    buildUserFromGoogle,
    buildUserFromInstagram,
    buildUserFromLinkedin,
    buildUserFromPinterest,
    buildUserFromTwitter,
  } from '@api/oauth/builder';

export default (req) => {
    let authenticatedUser = {};

    if (req.user) {
      switch (req.user.provider) {
        case 'bnet':
          authenticatedUser = buildUserFromBnet(req.user);
          break;
        case 'facebook':
          authenticatedUser = buildUserFromFacebook(req.user);
          break;
        case 'github':
          authenticatedUser = buildUserFromGithub(req.user);
          break;
        case 'google':
          authenticatedUser = buildUserFromGoogle(req.user);
          break;
        case 'instagram':
          authenticatedUser = buildUserFromInstagram(req.user);
          break;
        case 'linkedin':
          authenticatedUser = buildUserFromLinkedin(req.user);
          break;
        case 'pinterest':
          authenticatedUser = buildUserFromPinterest(req.user);
          break;
        case 'twitter':
          authenticatedUser = buildUserFromTwitter(req.user);
          break;
        default:
          authenticatedUser = {};
      }
    }

    return authenticatedUser;
};
