define(['../templates'], function (templates) {
  return {
    openLoginModal: function() {
      $(templates.loginModalTpl).modal();
    }  
  };
});

