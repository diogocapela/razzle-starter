const path = require('path');
const razzleHeroku = require('razzle-heroku');

module.exports = {
  modify: (config, { target, dev }, webpack) => {

    // Make it deployable on Heroku
    config = razzleHeroku(config, { target, dev }, webpack);

    // Add support for SCSS
    for (const rule of config.module.rules) {
      if (rule.test && rule.test.toString() === '/\\.module\\.css$/') {
        const scss = { ...rule };
        scss.test = /\.scss$/;
        scss.include = path.join(__dirname, 'src');
        scss.use.push({ loader: 'sass-loader' });
        config.module.rules.push(scss);
        break;
      }
    }

    // Add support for import alias
    config.resolve.alias['@assets'] = path.resolve('./src/assets');
    config.resolve.alias['@components'] = path.resolve('./src/components');
    config.resolve.alias['@config'] = path.resolve('./src/config');
    config.resolve.alias['@pages'] = path.resolve('./src/pages');
    config.resolve.alias['@partials'] = path.resolve('./src/partials');
    config.resolve.alias['@redux'] = path.resolve('./src/redux');
    config.resolve.alias['@styles'] = path.resolve('./src/styles');

    return config;
  }
};