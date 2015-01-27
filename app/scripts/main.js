require.config({
  paths: {
    underscore: '../bower_components/underscore/underscore',
    backbone: '../bower_components/backbone/backbone',
    marionette: '../bower_components/backbone.marionette/lib/backbone.marionette',
    jquery: '../bower_components/jquery/dist/jquery',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap'
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

require(['app', 'jquery', 'backbone', 'marionette', 'bootstrap'], function (app, $, Backbone, Marionette) {//fix: bootstrap export $, but in arguments is nothing, put it as last argument
  'use strict';
  // use app here
  console.log(app);
  console.log('Running jQuery %s', $().jquery);
});
