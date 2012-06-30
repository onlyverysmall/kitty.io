define([
  'jquery'
, 'underscore'
, 'backbone'
, 'models/laser_pointer'
, 'text!templates/laser_pointer_button.html'
],
function(
  $
, _
, Backbone
, LaserPointer
, LaserPointerButtonTemplate
) {

  var LaserPointerButtonView = Backbone.View.extend({

    template: _.template(LaserPointerButtonTemplate)

  , events: {
      'click #laser_pointer_button': 'startLaserPointer'
    }

  , initialize: function() {
      this.model = new LaserPointer();
    }

  , render: function() {
      var html = this.template();
      this.$el.html(html);

      return this;
    }

  , startLaserPointer: function() {
      this.model.pointLaser();
    }

  });

  return LaserPointerButtonView;
});


