processing-boilerplate
======================

Skipping the Processing IDE via Grunt &amp; Node.js

##WARNING##
THIS IS WORK IN PROGRESS! THINGS WILL FAIL!

##Prerequisites##
You need to have **[node.js](http://nodejs.org)** and the CLI version of **[Grunt](http://gruntjs.com)** installed.

##Installation##
Clone the repo using git:
```
$ git clone git://github.com/m90/processing-boilerplate.git
```
Then install all dev dependencies:
```
$ npm install
```
Edit the information in the `package.json` file to suit your needs.

##Workflow##
Go to the repo's root folder and start Grunt's default task:
```
$ grunt
```
This will fire up a static server serving your processing sketch to `localhost:9001`. Work inside the `sketch` directory and Grunt will listen for all changes inside this folder. Each time you change a file a new version of your sketch is rendered and deployed. If your browser supports WebSockets the sketch will automatically reload, if not just hit reload.
