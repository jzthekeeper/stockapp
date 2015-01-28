require.config({
  paths: {
    underscore: '../bower_components/underscore/underscore',
    backbone: '../bower_components/backbone/backbone',
    marionette: '../bower_components/backbone.marionette/lib/backbone.marionette',
    jquery: '../bower_components/jquery/dist/jquery',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
    text: '../bower_components/requirejs-text/text',
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      exports: 'Backbone',
      deps: ['jquery', 'underscore']
    },
    marionette: {
      exports: 'Backbone.Marionette',
      deps: ['backbone']
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    }
  }
});

require(['app', 'jquery', 'backbone', 'marionette', 
  'routers/home.router',
  'controllers/home.controller', 'bootstrap'], 
  function (app, $, Backbone, Marionette, HomeRouter, homeController) {//fix: bootstrap export $, but in arguments is nothing, put it as last argument
    'use strict';
    app.start();
    var homeRouter = new HomeRouter({
      controller: homeController 
    });
    Backbone.history.start();
});
