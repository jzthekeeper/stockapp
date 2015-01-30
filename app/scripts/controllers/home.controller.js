define(['../templates', '../views/signin.modal.view', '../app'], function (templates, SignUpModalView, app) {
  return {
    openLoginModal: function() {
      app.modalRegion.show(new SignUpModalView());
    }  
  };
});

