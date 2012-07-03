define([
  'jquery'
, 'backbone'
, 'ros'
],
function(
  $
, Backbone
, ros
) {

  var Navigator = Backbone.Model.extend({

    defaults: {
      enabled: true
    }

  , initialize: function() {
      var cmdVel = new ros.Topic({
        node        : 'talker'
      , name        : '/cmd_vel'
      , messageType : 'geometry_msgs/Twist'
      });
      this.set({ 'cmdVel' : cmdVel });
    }

  , forward: function() {
      var twist = new ros.Message({
        angular: {
          x: 0
        , y: 0
        , z: 0
        }
      , linear: {
          x: 1
        , y: 0
        , z: 0
        }
      });
      this.get('cmdVel').publish(twist);
      console.log('Published forward message');
    }

  , backward: function() {
      var twist = new ros.Message({
        angular: {
          x: 0
        , y: 0
        , z: 0
        }
      , linear: {
          x: -1
        , y: 0
        , z: 0
        }
      });
      this.get('cmdVel').publish(twist);
      console.log('Published backward message');
    }

  , left: function() {
      var twist = new ros.Message({
        angular: {
          x: 0
        , y: 0
        , z: 1
        }
      , linear: {
          x: 0
        , y: 0
        , z: 0
        }
      });
      this.get('cmdVel').publish(twist);
      console.log('Published left message');
    }

  , right: function() {
      var twist = new ros.Message({
        angular: {
          x: 0
        , y: 0
        , z: -1
        }
      , linear: {
          x: 0
        , y: 0
        , z: 0
        }
      });
      this.get('cmdVel').publish(twist);
      console.log('Published right message');
    }

  });

  return Navigator;
});

