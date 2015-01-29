define(['../templates', 'modal'], function (templates) {
  return {
    openLoginModal: function() {
      //$(templates.loginModalTpl).modal();
      var Modal = Backbone.Modal.extend({
        template: _.template(templates.loginModalTpl),
        events: {
          'click .bbm-button': 'close'
        },
        close: function() {
          this.triggerCancel();
        }
      });
      var modalView = new Modal();
      $('.login').html(modalView.render().el);
    }  
  };
});

