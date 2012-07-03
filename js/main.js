requirejs.config({
  enforceDefine: true

, paths: {
    // Libraries
    jquery        : 'libs/jquery/jquery'
  , underscore    : 'libs/underscore/underscore'
  , backbone      : 'libs/backbone/backbone'
    // Plugins
  , text          : 'libs/require/text'
    // ROS
  , eventemitter2 : 'libs/eventemitter2/eventemitter2'
  , ROS           : 'libs/ros/ros'
    // Templates
  , templates     : '../templates'
  }

, shim: {
    'underscore': {
      exports: '_'
    }
  , 'backbone': {
      deps    : ['underscore', 'jquery']
    , exports : 'Backbone'
    }
  }
});

define(['app'], function(App) {

});

