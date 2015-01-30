//define(['require', 'text'], function (require, text) {
define(function (require) {
  return {
    loginModalTpl: require('text!../templates/modal-login.html'),
    signUpModalTpl: require('text!../templates/modal-signup.html')
  };
});

