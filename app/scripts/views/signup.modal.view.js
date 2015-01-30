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
           this.triggerSubmit();
         },
         submit: function() {
           this.model.save({
             name: $(this.ui.userName).val(),
             pswd: $(this.ui.pswd).val()
           });
         }


     });
   });
