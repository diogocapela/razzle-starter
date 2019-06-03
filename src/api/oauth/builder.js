import get from 'lodash/get';

export const buildUserFromGoogle = user => ({
    name: get(user, 'displayName'),
    photo: get(user, 'photos.0.value'),
    provider: get(user, 'provider'),
    token: get(user, 'token'),
});

export const buildUserFromTwitter = user => ({
    name: get(user, 'name.username'),
    photo: get(user, 'photos.0.value'),
    provider: get(user, 'provider'),
    token: get(user, 'token'),
});

export const buildUserFromFacebook = user => ({
    name: `${get(user, 'name.givenName')} ${get(user, 'name.familyName')}`,
    photo: get(user, 'photos.0.value'),
    provider: get(user, 'provider'),
    token: get(user, 'token'),
});

export const buildUserFromGithub = user => ({
    name: get(user, 'name.username'),
    photo: get(user, 'photos.0.value'),
    provider: get(user, 'provider'),
    token: get(user, 'token'),
});

export const buildUserFromBnet = user => ({
    name: get(user, 'battletag'),
    photo: 'https://secondchancetinyhomes.org/wp-content/uploads/2016/09/empty-profile.png',
    provider: get(user, 'provider'),
    token: get(user, 'token'),
});
