define([
  'jquery'
, 'underscore'
, 'backbone'
, 'models/treat_dispenser'
, 'text!templates/treat_dispenser_control.html'
],
function(
  $
, _
, Backbone
, TreatDispenser
, TreatDispenserControlTemplate
) {

  var TreatDispenserControlView = Backbone.View.extend({

    template: _.template(TreatDispenserControlTemplate)

  , events: {
      'click #treat_dispenser_control': 'treat'
    }

  , initialize: function() {
      this.model = new TreatDispenser();
    }

  , render: function() {
      var html = this.template();
      this.$el.html(html);

      return this;
    }

  , treat: function() {
      this.model.dispenseTreat();
    }

  });

  return TreatDispenserControlView;
});

