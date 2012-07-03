define([
  'jquery'
, 'underscore'
, 'backbone'
, 'views/video'
, 'views/controls'
],
function(
  $
, _
, Backbone
, VideoView
, ControlsView
) {

  var AppView = Backbone.View.extend({

    initialize: function() {
      this.setElement('#app');
    }

  , render: function() {
      var videoView = new VideoView();
      this.$el.find('#app_video').html(videoView.render().el);

      var controlsView = new ControlsView();
      this.$el.find('#app_controls').html(controlsView.render().el);

      return this;
    }

  });

  return AppView;
});

