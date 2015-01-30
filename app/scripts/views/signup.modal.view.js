define([
  '../templates',
  '../app',
  '../models/user.model',
  'backbone',
  'jquery',
  'marionette',
  'backbone.modal'],
  function (templates, app, UserModel, Backbone, $) {
    return Backbone.Modal.extend({
      template: _.template(templates.signUpModalTpl),
      model: new UserModel(),
      ui: {
        userName: '#user-register-name',
        pswd: '#user-register-pswd'
      },
      events: {
        'click .bbm-button.submit': 'submitRegister'
      },
      submitRegister: function() {
        var view = this;
        submit().then(function() {
          alert('register succeed!');
        }, function() {
          alert('submit failed!');
        });
        function submit() {
          return view.model.save({
            name: $(view.ui.userName).val(),
            pswd: $(view.ui.pswd).val()
          });
        }
      },
      submit: function() {
      }


    });
  });
