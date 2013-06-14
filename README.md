processing-boilerplate
======================

This setup lets you develop **[Processing](http://www.processing.org)** applications in any editor without having to use or install the Processing IDE.

It also comes with handy features like a **built-in webserver**, **automatic builds on file save** and **livereloading**.

##Prerequisites##
You need to have **[node.js](http://nodejs.org)** (>=0.10.5) installed. A global installation of the CLI version of **[Grunt](http://gruntjs.com)** (>=0.4.0) is also required, but this will auto-install itself if it is not found on your machine.

##Installation##
Clone the repo using git (or download and unzip the repo inside a new folder):
```sh
$ git clone git://github.com/m90/processing-boilerplate.git
```
Navigate to the repository's root and install all dependencies:
```sh
$ npm install
```
If you want to, edit the information in the `package.json` file to suit your sketch's needs.

##Workflow##
In the repo's root folder, start Grunt's default task:
```sh
$ grunt
```
This will fire up a static server serving a JavaScript version of your processing sketch to `localhost:9001` (if you want access this from other machines use `192.168.x.xxx:9001` using your server's local IP). To end this process just hit `Ctrl + C` and you're done.

Work and develop inside the `sketch` directory and Grunt will listen for all changes inside this folder. Each time you change a file a new version of your sketch is rendered and "deployed". If your browser supports WebSockets the sketch will automatically reload, in case not: just hit reload yourself.
###Command line options###
You can use another port for your webserver by using the `port` option like:
```sh
$ grunt --port=1337
```
You can turn off livereloading by using the `no-livereload` flag like:
```sh
$ grunt --no-livereload
```
###External libraries###
If you need to include external libraries/APIs just place the `.js` file in the `sketch` folder, the build system will copy them into the `build` folder and include them into the final HTML.
###Assets###
Place assets like sound or images inside a `data` folder inside your `sketch` folder, they will also be copied by the system.
***
###License & Copyright###
(c) 2013 [Frederik Ring](http://www.frederikring.com) - Released under the [MIT License](http://opensource.org/licenses/MIT)
