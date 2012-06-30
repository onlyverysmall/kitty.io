define([
  'ROS'
],
function(
  ROS
) {
  console.log('Initialize ros');
  var ros = new ROS('ws://10.0.1.18:9090');

  return ros;
});

