export const DEFAULT_LOCALE = 'en-US';

export const WEBSITE_NAME = 'Website Name';
export const WEBSITE_SLOGAN = 'Website Slogan Goes Here';
export const WEBSITE_DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
export const WEBSITE_URL = 'https://starter-react.herokuapp.com';
export const WEBSITE_EMAIL = 'hello@example.com';
export const WEBSITE_PHONE = '+351-912-345-678';
export const WEBSITE_KEYWORDS = 'website, react, dev';
export const WEBSITE_CITY = 'Porto';
export const WEBSITE_COUNTRY = 'Portugal';
export const WEBSITE_TWITTER = '@username';
export const WEBSITE_FACEBOOK = 'username';

export const SOCIAL_LINKS = [
    { url: 'https://twitter.com', slug: 'twitter', title: 'Twitter', target: '_blank' },
    { url: 'https://instagram.com', slug: 'instagram', title: 'Instagram', target: '_blank' },
    { url: 'https://facebook.com', slug: 'facebook', title: 'Facebook', target: '_blank' },
    { url: 'https://linkedin.com', slug: 'linkedin', title: 'LinkedIn', target: '_blank' },
    { url: 'https://pinterest.com', slug: 'pinterest', title: 'Pinterest', target: '_blank' },
    { url: 'https://youtube.com', slug: 'youtube', title: 'YouTube', target: '_blank' },
];

export const NAVBAR_LINKS = [
    { url: '/', slug: 'home', title: 'Home' },
    { url: '/about', slug: 'about', title: 'About' },
    { url: '/portfolio', slug: 'portfolio', title: 'Portfolio' },
    { url: '/blog', slug: 'blog', title: 'Blog' },
    { url: '/contact', slug: 'contact', title: 'Contact' },
];

export const FOOTER_LINKS = [
    { url: '/', slug: 'home', title: 'Home' },
    { url: '/about', slug: 'about', title: 'About' },
    { url: '/portfolio', slug: 'portfolio', title: 'Portfolio' },
    { url: '/blog', slug: 'blog', title: 'Blog' },
    { url: '/contact', slug: 'contact', title: 'Contact' },
];

export const LEGAL_LINKS = [
    { url: '/legal/privacy-policy', slug: 'privacy-policy', title: 'Privacy' },
    { url: '/legal/terms-and-conditions', slug: 'terms-and-conditions', title: 'Terms' },
    { url: '/legal/cookie-policy', slug: 'cookie-policy', title: 'Cookies' },
];

export const LOCALE_LINKS = [
    { url: null, slug: 'en-US', title: 'English' },
    { url: null, slug: 'pt-PT', title: 'Português' },
];

const developmentOAuthEndpoint = 'http://localhost:3000/oauth';
const productionOAuthEndpoint = 'https://starter-react.herokuapp.com/oauth';

export const oauthEndpoint = process.env.NODE_ENV === 'production' ? productionOAuthEndpoint : developmentOAuthEndpoint;
