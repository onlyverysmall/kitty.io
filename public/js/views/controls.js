define([
  'jquery'
, 'underscore'
, 'backbone'
, 'views/charmer_button'
, 'views/navigator'
, 'text!templates/controls.html'
],
function(
  $
, _
, Backbone
, CharmerButtonView
, NavigatorView
, ControlsTemplate
) {

  var ControlsView = Backbone.View.extend({

    template: _.template(ControlsTemplate)

  , render: function() {
      var $html = $(this.template());

      var charmerButtonView = new CharmerButtonView();
      $html.append($('<li>').append(charmerButtonView.render().el));

      var navigatorView = new NavigatorView();
      $html.append(navigatorView.render().el);

      this.$el.html($html);
      return this;
    }

  });

  return ControlsView;
});

