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

  var MyTwist  = null;
  var myCmdVel = null;

  function getTwistMessageType() {
    var deferred = $.Deferred();
    if (!MyTwist) {
      ros.messageTypes(['geometry_msgs/Twist'], function(Twist) {
        MyTwist = Twist;
        deferred.resolve(Twist);
      });
    }
    else {
      deferred.resolve(MyTwist);
    }

    return deferred.promise();
  }

  function getCmdVelTopic() {
    var deferred = $.Deferred();

    if (!myCmdVel) {
      getTwistMessageType().done(function(Twist) {
        myCmdVel = new ros.topic({
          node        : 'talker'
        , name        : '/cmd_vel'
        , messageType : Twist
        });
        deferred.resolve(myCmdVel);
      });
    }
    else {
      deferred.resolve(myCmdVel);
    }

    return deferred.promise();
  }

  var Navigator = Backbone.Model.extend({

    defaults: {
      enabled: false
    }

  , forward: function() {
      getTwistMessageType().done(function(Twist) {
        getCmdVelTopic().done(function(cmdVel) {
          var twist = new Twist({
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
          cmdVel.publish(twist);
          console.log('Published forward message on ' + cmdVel.name);
        });
      });
    }

  , backward: function() {
      getTwistMessageType().done(function(Twist) {
        getCmdVelTopic().done(function(cmdVel) {
          var twist = new Twist({
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
          cmdVel.publish(twist);
          console.log('Published backward message on ' + cmdVel.name);
        });
      });
    }

  , left: function() {
      getTwistMessageType().done(function(Twist) {
        getCmdVelTopic().done(function(cmdVel) {
          var twist = new Twist({
            angular: {
              x: -1
            , y: 0
            , z: 0
            }
          , linear: {
              x: 0
            , y: 0
            , z: 0
            }
          });
          cmdVel.publish(twist);
          console.log('Published left message on ' + cmdVel.name);
        });
      });
    }

  , right: function() {
      getTwistMessageType().done(function(Twist) {
        getCmdVelTopic().done(function(cmdVel) {
          var twist = new Twist({
            angular: {
              x: 1
            , y: 0
            , z: 0
            }
          , linear: {
              x: 0
            , y: 0
            , z: 0
            }
          });
          cmdVel.publish(twist);
          console.log('Published right message on ' + cmdVel.name);
        });
      });
    }

  });

  return Navigator;
});

