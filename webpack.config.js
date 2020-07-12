var Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .copyFiles({
        from: './assets/img',
        to: 'images/[path][name].[ext]',
    })
    .addEntry('js/app', [
        './node_modules/jquery/dist/jquery.slim.js',
        './node_modules/popper.js/dist/popper.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        './node_modules/holderjs/holder.min.js',
        './assets/js/dashkit.min.js',
        './assets/js/theme.min.js',
        './assets/js/app.js',
    ])
    .addEntry('js/post', './assets/js/post.js')
    .addEntry('js/profile', './assets/js/profile.js')
    .addStyleEntry('css/app', [
        './node_modules/bootstrap/dist/css/bootstrap.min.css',
        './assets/css/theme.min.css',
        './assets/css/app.scss',
        './assets/fonts/feather/feather.css'
    ])
    .autoProvideVariables({
        "Routing": "router",
    })
    .addLoader({
        test: /jsrouting-bundle\/Resources\/public\/js\/router.min.js$/,
        loader: "exports-loader?router=window.Routing"
    })
    .enableSassLoader()
    .splitEntryChunks()
    .autoProvidejQuery()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
;

let config = Encore.getWebpackConfig();

config.resolve.alias = {
    'router': __dirname + '/assets/js/router.js',
};

module.exports = config;
