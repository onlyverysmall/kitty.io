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
      this.model.on('change:enabled', this.toggleEnabled.bind(this));
    }

  , render: function() {
      var html = this.template();
      this.$el.html(html);

      this.$el.find('#treat_dispenser_control')
        .prop('disabled', !this.model.get('enabled'));

      return this;
    }

  , treat: function() {
      this.model.dispenseTreat();
    }

  , toggleEnabled: function() {
      this.render();
    }

  });

  return TreatDispenserControlView;
});

