Kitty.io is a web app interface to a kitten-playing robot. The purpose of
Kitty.io is to provide research into [Feline-Robot
Interaction](http://humanrobotinteraction.org/2013/) and build relationships
between the human operators and the cat subjects. As the robot will be placed in
an animal shelter, the ultimate objective is to boost adoption rates of
sheltered cats.

The site is not available to the public yet, but the code is available now.

Preview (Don't worry, I have hired a UX designer to help):

![Screenshot of Kitty.io](https://github.com/baalexander/kitty.io/raw/master/images/screenshot.png)

## Table of Contents

 * [Architecture](#architecture)
   * [Ros.js](#rosjs)
   * [Model View Controller](#model-view-controller)
   * [AMD](#amd)
   * [Testing](#testing)
 * [How To Run](#how-to-run)
 * [What's Next](#whats-next)

## Architecture

Kitty.io strives to take advantage of the latest best practices in large-scale
JavaScript web applications, including using an MVC-like framework, Asynchronous
Module Definitions, WebSockets, an event-driven architecture, and BDD testing.

#### Ros.js

Kitty.io utilizes the new ros.js API. The new ros.js provides a convenient
abstraction from the WebSocket communication with rosbridge.

The new ros.js follows the Observer pattern, listening for events like when a
message was published or a connection error occurred and responds accordingly.
This event-oriented implementation allows for a decoupled, responsive interface
to ROS.

#### Model View Controller

Kitty.io is meant to be a large-scale JavaScript web application. Instead of
rendering and client logic occurring server side, the only interaction with the
server happens through REST and WebSocket calls.

[Backbone.js](http://backbonejs.org/) provides the basic MVC structure for
Kitty.io. The key components include:

 * Models - Most ros.js topics or services are wrapped in Backbone models. For
   example, the Navigator model creates a cmd_vel ROS topic in the background.
   The Navigator model provides convenient functions like forward() and
   backward() instead of other models or views interacting with the ROS topic
   directly.

 * Views - Every visual component of the web app is represented as a Backbone
   view. The views are responsible for listening to user events like clicks and
   passing interacting with an underlying model.

   The Treat Dispenser button view, for instance, is backed by a TreatDispenser
   model. The view listens for when a user clicks the "Treat" button and when
   clicked, calls the TreatDispenser model's dispenseTreat().

   The Treat Dispenser button view also listens for changes from the model. If
   the user is no longer allowed to access the TreatDispenser, the
   TreatDispenser emits an disabled event that causes the button view to
   automatically changed the HTML button to disabled.

 * Templates - Backbone views are more like "view controllers". The actual HTML
   templates are separated as individual HTML files.

#### AMD

The directory structure for Kitty.io is dozens of small files laid out like so:

```
css/
images/
js/
  libs/    - Third-party libraries like Backbone and ros.js
  models/  - All app models, like Navigator, User, and TreatDispenser
  views/   - All app views, like button views or the video player view
  main.js  - require.js configuration and app entry point
  app.js   - The app bootstrap logic, including which initial views to load.
  ros.js   - Wrapper around the ros.js library so all modules can load the same
             ros instance.
templates/ - HTML template files
```

The models and views follow the [Asynchronous Module
Definition](http://requirejs.org/docs/whyamd.html#amd)(AMD). Using
[require.js](http://requirejs.org/), an AMD loader, each module, view, or other
JavaScript file can specify only the JavaScript modules they depend on.
Require.js handles these dependencies and loads in the correct JavaScript files
and even HTML templates as needed.

#### Testing

A big advantage of separating the view logic from the models is easier testing.
While not yet implemented, I have had good luck using
[mocha.js](http://visionmedia.github.com/mocha/) to test Backbone models
independently of presentation level changes.

## How To Run

A [TurtleBot](http://ros.org/wiki/Robots/TurtleBot) is the feline-robot
companion of choice. Though the ROS cat packages are not yet ready for
open-sourcing, the web app can still operate with the following ROS launch
files:

```bash
roslaunch turtlebot_bringup minimal.launch
roslaunch turtlebot_bringup kinect.launch
rosrun rosbridge rosbridge.py
rosrun mjpeg_server mjpeg_server
```

A [static server](https://gist.github.com/3037480) will need to be set up to
serve the site and the video URL should point to the IP address of the
mjpeg_server.

## What's Next

Kitty.io is still early and very much a Work In Progress. A few of the upcoming
features and goals:

 * User Experience overhaul - I have hired a UX designer to come up with
   wireframes for Kitty.io.
 * Improve Backbone.js structure - [SoundCloud's
   talk](http://backstage.soundcloud.com/2012/06/building-the-next-soundcloud/)
   on how they're using Backbone.js has some excellent ideas, like a model
   instance store. I'm currently thinking a combination of SoundCloud's ideas
   and [Addy Osmani's](http://addyosmani.com/largescalejavascript/) widget
   approach has the most potential.
 * User Authentication - The idea is only logged in users will be able to play.
   Debating on integrating with Facebook and/or Twitter.
 * A permission system is needed to specify which actions which users can
   perform and when. The current idea is for an Access Control List on the
   server that can update continuously as users are queued up.

