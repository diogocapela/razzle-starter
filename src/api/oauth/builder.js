import get from 'lodash/get';

function User(user) {
    this.name = user.name;
    this.photo = user.photo || 'https://secondchancetinyhomes.org/wp-content/uploads/2016/09/empty-profile.png';
    this.provider = user.provider;
    this.token = user.token;
}

export const buildUserFromBnet = user => new User({
    name: get(user, 'battletag'),
    photo: null,
    provider: get(user, 'provider'),
    token: get(user, 'token'),
});

export const buildUserFromFacebook = user => new User({
    name: `${get(user, 'name.givenName')} ${get(user, 'name.familyName')}`,
    photo: get(user, 'photos.0.value'),
    provider: get(user, 'provider'),
    token: get(user, 'token'),
});

export const buildUserFromGithub = user => new User({
    name: get(user, 'name.username'),
    photo: get(user, 'photos.0.value'),
    provider: get(user, 'provider'),
    token: get(user, 'token'),
});

export const buildUserFromGoogle = user => new User({
    name: get(user, 'displayName'),
    photo: get(user, 'photos.0.value'),
    provider: get(user, 'provider'),
    token: get(user, 'token'),
});

export const buildUserFromInstagram = user => new User({
    name: get(user, 'displayName'),
    photo: get(user, 'photos.0.value'),
    provider: get(user, 'provider'),
    token: get(user, 'token'),
});

export const buildUserFromLinkedin = user => new User({
    name: get(user, 'displayName'),
    photo: get(user, 'photos.0.value'),
    provider: get(user, 'provider'),
    token: get(user, 'token'),
});

export const buildUserFromPinterest = user => new User({
    name: get(user, 'displayName'),
    photo: get(user, 'photos.0.value'),
    provider: get(user, 'provider'),
    token: get(user, 'token'),
});

export const buildUserFromTwitter = user => new User({
    name: get(user, 'name.username'),
    photo: get(user, 'photos.0.value'),
    provider: get(user, 'provider'),
    token: get(user, 'token'),
});
