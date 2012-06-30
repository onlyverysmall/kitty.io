define([
  'jquery'
, 'underscore'
, 'backbone'
, 'models/laser_pointer'
, 'text!templates/laser_pointer_control.html'
],
function(
  $
, _
, Backbone
, LaserPointer
, LaserPointerControlTemplate
) {

  var LaserPointerControlView = Backbone.View.extend({

    template: _.template(LaserPointerControlTemplate)

  , events: {
      'click #laser_pointer_control': 'startLaserPointer'
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

  return LaserPointerControlView;
});


