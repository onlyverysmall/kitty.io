define([
  'backbone'
],
function(
  Backbone
) {

  var LaserPointer = Backbone.Model.extend({

    defaults: {
      enabled: false
    }

  , pointLaser: function() {
      console.log('Starting laser point mode');
    }

  });

  return LaserPointer;
});

