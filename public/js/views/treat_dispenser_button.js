define([
  'jquery'
, 'underscore'
, 'backbone'
, 'models/treat_dispenser'
, 'text!templates/treat_dispenser_button.html'
],
function(
  $
, _
, Backbone
, TreatDispenser
, TreatDispenserButtonTemplate
) {

  var TreatDispenserButtonView = Backbone.View.extend({

    template: _.template(TreatDispenserButtonTemplate)

  , events: {
      'click #treat_dispenser_button': 'treat'
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

  return TreatDispenserButtonView;
});

