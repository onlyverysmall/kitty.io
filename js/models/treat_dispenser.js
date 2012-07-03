define([
  'backbone'
],
function(
  Backbone
) {

  var TreatDispenser = Backbone.Model.extend({

    defaults: {
      enabled: false
    }

  , dispenseTreat: function() {
      console.log('Dispensing treat');
    }

  });

  return TreatDispenser;
});

