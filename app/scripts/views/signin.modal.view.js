define([
  '../templates',
  '../app',
  './signup.modal.view',
  'backbone',
  'marionette',
  'backbone.modal'],
  function (templates, app, SignUpModalView, Backbone) {
    return Backbone.Modal.extend({
        template: _.template(templates.loginModalTpl),
        events: {
          'click .bbm-button': 'signUp'
        },
        signUp: function() {
          app.modalRegion.show(new SignUpModalView());
        }
    });
});
