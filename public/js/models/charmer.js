define([
  'backbone'
],
function(
  Backbone
) {

  var Charmer = Backbone.Model.extend({

    defaults: {
      enabled: false
    }

  , charm: function() {
      console.log('charming');
    }

  });

  return Charmer;
});


