# Plug-in Architecture

This set of experiments was created to investigate options for establishing a plug-in architecture for a browser-based application.

There are three approaches under consideration include:

1. DOM Injection
1. Dynamic Imports
1. Web Workers

It is conventional for plug-ins to follow a common interface to simplify execution. However, unless the plug-in code is isolated there is a risk of overriding (or shadowing) of the interface (exposed functions). To demonstrate the issue there is another experiment called (0) Static Scripts.

In our experiments there are four plugins/modules, one for each basic mathematic operation; addition, subtraction, multiplication and division. Each operation takes in two numbers, performs the calculation and returns the result.

## Folder Structure
At the top level of the project there is a simple index.html file that aids navigation to the experiments. Accompanying the index file there is a CSS 'styles' files to define some common stylistic rules, to make is look pretty.

The plugins in our experiment are in two forms; ES modules and regular script functions (in the plugins folder). There is a list of plugins (known as a manifest), located in the plugins folder, that in this case is in JSON format.

The four experiments are in their own folders containing index.html and script.js files. In the '3 web-worker' folder there is another JS file called 'pluginRunner' that will be explained later.

The index.html file for each experiment follows a common pattern for the HTML. The are two text input elemnts for the user to supply input data. There is a div element in which the result of the operation performed by the plugin. Finally, there is a placeholder (span) where buttons will be inserted based on the plugins documented in the manifest. After the HTML template there is a script element referencing the experiment's own script.js file. 

## Experiment Files
Only the Static Scripts experiment has more, which is four pairs of elements, one per operation. The first element loads the plugin script with the second referinging the calc function it exposes to create a button and attaching a click event handler.

The other three experiments start by importing the manfest.json file from the plugins folder. For each entry in the manifest a button is created and inserted in to the template. In the first two examples either a script element is created and inserted into the DOM or a module is (dynamically) imported.

The third example is far more involved but more effective by use of a web worker (pluginRunner.js) which load a stipulated plugin (if not currently loaded) using the 'importScripts' operation. The other operation performed by the web worker is execution of the function exposed by the plugin. All these interactions are performed (both sides) via the omessage event handler (to recieve messages) and the postMessage statement to send messages.

Finally, a click event handler is attached to the placeholder to execute the operation associated with each button.
