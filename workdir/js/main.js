require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['jquery', 'cordova/demo'], function ($, cordovaApp) {
    'use strict';
    // use app here
    // var mobileApp = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;

    cordovaApp.initialize();

    $(function() {
        // add class?
        FastClick.attach(document.body);
    });

    console.log('Running jQuery %s', $().jquery);
});