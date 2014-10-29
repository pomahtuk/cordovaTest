require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery'    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['jquery'], function ($) {
    'use strict';
    // use app here
    console.log('Running jQuery %s', $().jquery);
});