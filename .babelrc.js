const alias = require('./src/config/alias-imports');

module.exports = {
    presets: [require.resolve('@babel/preset-env')],
    plugins: [
        [ require.resolve('babel-plugin-module-resolver'), { alias } ],
    ]
};
