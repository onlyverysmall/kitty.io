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
      that.model = new Navigator();

      $(document).keydown(function (event) {
        var keyCode = event.keyCode || event.which;
        var arrow  = { left: 37, up: 38, right: 39, down: 40 };

        if (keyCode === arrow.up) {
          that.model.forward();
          return false;
        }
        else if (keyCode === arrow.down) {
          that.model.backward();
          return false;
        }
        else if (keyCode === arrow.left) {
          that.model.left();
          return false;
        }
        else if (keyCode === arrow.right) {
          that.model.right();
          return false;
        }
      });
    }

  , render: function() {
      var html = this.template();
      this.$el.html(html);

      return this;
    }

  });

  return NavigatorControlsView;
});

