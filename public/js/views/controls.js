define([
  'jquery'
, 'underscore'
, 'backbone'
, 'views/charmer_button'
, 'views/laser_pointer_button'
, 'views/treat_dispenser_button'
, 'views/navigator'
, 'text!templates/controls.html'
, 'text!templates/coming_soon_button.html'
],
function(
  $
, _
, Backbone
, CharmerButtonView
, LaserPointerButtonView
, TreatDispenserButtonView
, NavigatorView
, ControlsTemplate
, ComingSoonButtonTemplate
) {

  var ControlsView = Backbone.View.extend({

    template: _.template(ControlsTemplate)

  , render: function() {
      var $html = $(this.template());

      var charmerButtonView = new CharmerButtonView();
      $html.append($('<li>').append(charmerButtonView.render().el));
      var laserPointerButtonView = new LaserPointerButtonView();
      $html.append($('<li>').append(laserPointerButtonView.render().el));
      var treatDispenserButtonView = new TreatDispenserButtonView();
      $html.append($('<li>').append(treatDispenserButtonView.render().el));
      $html.append($('<li>').append(ComingSoonButtonTemplate));

      var navigatorView = new NavigatorView();
      $html.append(navigatorView.render().el);

      this.$el.html($html);
      return this;
    }

  });

  return ControlsView;
});

