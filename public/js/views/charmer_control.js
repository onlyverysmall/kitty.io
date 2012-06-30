define([
  'jquery'
, 'underscore'
, 'backbone'
, 'models/charmer'
, 'text!templates/charmer_control.html'
],
function(
  $
, _
, Backbone
, Charmer
, CharmerControlTemplate
) {

  var CharmerControlView = Backbone.View.extend({

    template: _.template(CharmerControlTemplate)

  , events: {
      'click #charmer_control': 'charm'
    }

  , initialize: function() {
      this.model = new Charmer();
    }

  , render: function() {
      var html = this.template();
      this.$el.html(html);

      return this;
    }

  , charm: function() {
      this.model.charm();
    }

  });

  return CharmerControlView;
});

