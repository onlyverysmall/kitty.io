define([
  'jquery'
, 'underscore'
, 'backbone'
, 'views/charmer_control'
, 'views/laser_pointer_control'
, 'views/treat_dispenser_control'
, 'views/navigator_controls'
, 'text!templates/controls.html'
, 'text!templates/coming_soon_control.html'
],
function(
  $
, _
, Backbone
, CharmerControlView
, LaserPointerControlView
, TreatDispenserControlView
, NavigatorControlsView
, ControlsTemplate
, ComingSoonControlTemplate
) {

  var ControlsView = Backbone.View.extend({

    template: _.template(ControlsTemplate)

  , render: function() {
      var charmerControlView        = new CharmerControlView()
        , laserPointerControlView   = new LaserPointerControlView()
        , treatDispenserControlView = new TreatDispenserControlView()
        , navigatorControlsView     = new NavigatorControlsView()
        ;

      var $html = $(this.template());
      $html.append($('<li>').append(charmerControlView.render().el))
      $html.append($('<li>').append(laserPointerControlView.render().el))
      $html.append($('<li>').append(treatDispenserControlView.render().el))
      $html.append($('<li>').append(ComingSoonControlTemplate))
      $html.append(navigatorControlsView.render().el);

      this.$el.html($html);
      return this;
    }

  });

  return ControlsView;
});

