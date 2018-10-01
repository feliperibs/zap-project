// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
var webpackConfig = require('./webpack/webpack.test');
var path = require('path');
module.exports = function (config) {
    var _config = {
        basePath: '',
        // frameworks: ['chai', 'sinon', 'mocha'],
        frameworks: ['jasmine'],
        plugins: [
            require('karma-jasmine'),
            require('karma-webpack'),
            require('karma-chrome-launcher'),
            require('karma-phantomjs-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('karma-sourcemap-loader')
        ],
        client: {
            clearContext: false
        },
        files: [
            'node_modules/babel-polyfill/dist/polyfill.js',
            { pattern: './karma-test-shim.js', watched: false },
        ],
        mime: {
            'text/x-typescript': ['ts', 'tsx']
        },
        preprocessors: {
            './karma-test-shim.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: 'errors-only'
        },
        webpackServer: {
            noInfo: true
        },
        reporters: ['progress', 'coverage-istanbul'],
        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly', 'text-summary'],
            dir: path.join(__dirname, 'coverage'),
            fixWebpackSourcePaths: true,
            skipFilesWithNoCoverage: true,
            'report-config': {
                html: {
                    subdir: 'html'
                }
            },
        },
        port: 8205,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true,
        failOnEmptyTestSuite: false,
        browserNoActivityTimeout: 1000 * 60 * 3
    };
    config.set(_config);
};
