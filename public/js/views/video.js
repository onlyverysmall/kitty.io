define([
  'jquery'
, 'underscore'
, 'backbone'
, 'text!templates/video.html'
],
function(
  $
, _
, Backbone
, VideoTemplate
) {

  var VideoView = Backbone.View.extend({

    render: function() {
      var html = _.template(VideoTemplate);
      this.$el.html(html);
      return this;
    }

  });

  return VideoView;
});

