define([
  '../templates',
  '../app',
  './signup.modal.view',
  '../models/user.model',
  'jquery',
  'backbone',
  'marionette',
  'backbone.modal'],
  function (templates, app, SignUpModalView, UserModel, $, Backbone) {
    return Backbone.Modal.extend({
      template: _.template(templates.loginModalTpl),
      events: {
        'click .sign-up': 'signUp',
        'click .sign-in': 'signIn',
      },
      ui: {
        userName: '#user-login-name',
        pswd: '#user-login-pswd'
      },
      signUp: function() {
        app.modalRegion.show(new SignUpModalView());
      },
      signIn: function() {
        var modal = this;
        $.post('key/web/stock/login.json', {
          name: $(this.ui.userName).val(),
          pswd: $(this.ui.pswd).val()
        }).then(function() {
          alert('sign in ok!');  
          modal.destroy();
        }, function() {
          alert('sign in failed');
        });
      }
    });
  });
