define([
  'jquery'
, 'underscore'
, 'backbone'
, 'views/video'
, 'views/controls'
, 'text!templates/app.html'
],
function(
  $
, _
, Backbone
, VideoView
, ControlsView
, AppTemplate
) {

  var AppView = Backbone.View.extend({

    template: _.template(AppTemplate)

  , initialize: function() {
      this.setElement('#app');
    }

  , render: function() {
      var html = this.template();
      this.$el.html(html);

      var videoView = new VideoView();
      this.$el.find('#app_video').html(videoView.render().el);

      var controlsView = new ControlsView();
      this.$el.find('#app_controls').html(controlsView.render().el);

      return this;
    }

  });

  return AppView;
});

