const alias = require('./alias.json');

module.exports = {
    presets: [require.resolve('@babel/preset-env')],
    plugins: [
        [ require.resolve('babel-plugin-module-resolver'), { alias } ],
    ]
};
