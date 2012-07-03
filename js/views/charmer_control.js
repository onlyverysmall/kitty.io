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
      this.model.on('change:enabled', this.toggleEnabled.bind(this));
    }

  , render: function() {
      var html = this.template();
      this.$el.html(html);

      this.$el.find('#charmer_control')
        .prop('disabled', !this.model.get('enabled'));

      return this;
    }

  , charm: function() {
      this.model.charm();
    }

  , toggleEnabled: function() {
      this.render();
    }

  });

  return CharmerControlView;
});

