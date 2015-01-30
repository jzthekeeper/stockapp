define(['../templates', 'modal', '../app'], function (templates, Modal, app) {
  return {
    openLoginModal: function() {
      //$(templates.loginModalTpl).modal();
      var Modal = Backbone.Modal.extend({
        template: _.template(templates.loginModalTpl),
        events: {
          'click .bbm-button': 'signUp'
        },
        signUp: function() {
            var SignUpModal = Backbone.Modal.extend({
                template: _.template(templates.signUpModalTpl),
                events: {
                    'click .bbm-button.submit': 'submitRegister'
                },
                submitRegister: function() {
                    this.triggerSubmit();
                }
            });
            var signUpModalView = new SignUpModal();
            app.modalRegion.show(signUpModalView);
        }
      });
      var modalView = new Modal();
      app.modalRegion.show(modalView);
    }  
  };
});

