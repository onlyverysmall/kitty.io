define([
  'jquery'
, 'underscore'
, 'backbone'
, 'models/charmer'
, 'text!templates/charmer_button.html'
],
function(
  $
, _
, Backbone
, Charmer
, CharmerButtonTemplate
) {

  var CharmerButtonView = Backbone.View.extend({

    template: _.template(CharmerButtonTemplate)

  , events: {
      'click #charmer_button': 'charm'
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

  return CharmerButtonView;
});

