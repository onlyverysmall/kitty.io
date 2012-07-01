define([
  'jquery'
, 'underscore'
, 'backbone'
, 'models/navigator'
, 'text!templates/navigator_controls.html'
],
function(
  $
, _
, Backbone
, Navigator
, NavigatorControlsTemplate
) {

  var NavigatorControlsView = Backbone.View.extend({

    template: _.template(NavigatorControlsTemplate)

  , initialize: function() {
      var that = this;
      this.model = new Navigator();
      this.model.on('change:enabled', this.toggleEnabled.bind(this));
    }

  , render: function() {
      var html = this.template();
      this.$el.html(html);

      this.boundKeyInputHandler = this.boundKeyInputHandler || this.keyInputHandler.bind(this);
      if (this.model.get('enabled')) {
        $(document).on('keydown', this.boundKeyInputHandler);
      }
      else {
        $(document).off('keydown', this.boundKeyInputHandler);
      }

      return this;
    }

  , toggleEnabled: function() {
      this.render();
    }

  , keyInputHandler: function(event) {
      var keyCode = event.keyCode || event.which;
      var arrow  = { left: 37, up: 38, right: 39, down: 40 };

      if (keyCode === arrow.up) {
        console.log('up');
        this.model.forward();
        return false;
      }
      else if (keyCode === arrow.down) {
        this.model.backward();
        return false;
      }
      else if (keyCode === arrow.left) {
        this.model.left();
        return false;
      }
      else if (keyCode === arrow.right) {
        this.model.right();
        return false;
      }
    }

  });

  return NavigatorControlsView;
});

