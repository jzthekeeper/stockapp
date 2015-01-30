/*global define */
define(['marionette'], function (Marionette) {
    'use strict';
    var stockApp = new Marionette.Application();
    stockApp.addRegions({
        modalRegion: '.modal-region'
    });
    return stockApp;
});
