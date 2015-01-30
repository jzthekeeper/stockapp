define(['backbone'], function (Backbone) {
  return Backbone.Model.extend({
    url: 'key/web/stock/register.json',
    defaults: {
      name: '',
      pswd: ''
    }
  });
});

