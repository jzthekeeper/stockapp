define(['../templates', '../views/signin.modal.view', '../app'], function (templates, signUpModalView, app) {
  return {
    openLoginModal: function() {
      app.modalRegion.show(new signUpModalView());
    }  
  };
});

