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
      this.model.on('change:enabled', this.toggleEnabled.bind(this));
    }

  , render: function() {
      var html = this.template();
      this.$el.html(html);

      this.$el.find('#laser_pointer_control')
        .prop('disabled', !this.model.get('enabled'));

      return this;
    }

  , startLaserPointer: function() {
      this.model.pointLaser();
    }

  , toggleEnabled: function() {
      this.render();
    }

  });

  return LaserPointerControlView;
});


