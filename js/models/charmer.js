define([
  'backbone'
],
function(
  Backbone
) {

  var Charmer = Backbone.Model.extend({

    defaults: {
      enabled: true
    }

  , charm: function() {
      console.log('charming');
    }

  });

  return Charmer;
});


