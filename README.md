jquery-enhanced-switch-control
==============================

**jQuery Enhanced Switch Control** is a plugin created for the [jQuery](http://jquery.com/) Javascript library that allows you to create custom switch controls that are easy-to-use and themeable.  It separates each individual theme into its own CSS file.  The controls can be modified by the user or through Javascript code.

# Getting Started
### Downloading the library
Download the library from Github above by clicking on the **Download ZIP** button.  

### Referencing the different files
#### The Javascript File
You will need to reference the Javascript file called **jquery.enhanced-switch.js** using a HTML `<script>` tag as shown below:
```html
<script src="{SCRIPTS DIRECTORY}/jquery.enhanced-switch.js"></script>
```
`SCRIPTS DIRECTORY` is the file path to the script files.

#### The CSS File
There are several CSS files included with the library.  These files are sample themes that you can use in your website or web app as well as to create your own themes.  Include only **ONE** CSS file in your HTML file using the `<link>` tag as shown below:
```html
<link rel="stylesheet" type="text/css" href="jquery.enhanced-switch-{THEME NAME}.css"/>
```

`THEME NAME` is the name of the theme you want to use (e.g. apple, circle, metro etc).

<a name="documentation"></a>
# Documentation
**jQuery Enhanced Switch Control** contains several functions that allow you to control the switch control.  All the functions can be accessed using the following syntax:
```javascript
$(selectorString).enhancedSwitch('{FUNCTION NAME}');
```

`FUNCTION NAME` is the name of the function you would like to execute.  A list of all the functions with a description of what they do can be found below:

### init
The `init` function is used to initialise an empty `<div>` or multiple `<div>`'s.  The `<div>`/s need to be empty in order for the plugin to work properly.  The function can be accessed by either calling `.enhancedSwitch()` or by calling `.enhancedSwitch("init")`.

Example:

**HTML**
```html
<div class="wrapper">
    <div class="switch"></div>
</div>
```

**Javascript**
```javascript
$(function() {
    $(".switch").enhancedSwitch();
    // OR (only choose one)
    $(".switch").enhancedSwitch("init");
});
```

### toggle
The `toggle` function allows you to toggle the state (i.e. its checked state).  Simply call it on an Enhanced Switch object that has been initialised.  An example of how this function can be used can be found below:

**Javascript**
```javascript
$(".switch").enhancedSwitch("toggle");
```

### state
The `state` function returns the checked state of the Enhanced Switch object as a boolean.  If the switch is *on*, it returns `true`.  If the switch is *off*, it returns `false`.  An example can be found below:

**Javascript**
```javascript
var state = $(".switch").enhancedSwitch("state");
// state will either contain TRUE if the switch is on, or FALSE if the switch is off
```

### setTrue
This function sets the state of the Enhanced Switch/es to a value of `true`.  An example demonstrates its usage:

**Javascript**
```javascript
$(".switch").enhancedSwitch("setTrue");
```

### setFalse
This function sets the state of the Enhanced Switch/es to a value of `false`.  An example is found below:

**Javascript**
```javascript
$(".switch").enhancedSwitch("setFalse")
```

#Contact
You can email any queries or suggestions to [enhanced.switch@gmail.com](mailto:enhanced.switch@gmail.com).

#Licence
This work is licence under the General Public License v2.0: http://www.gnu.org/licenses/gpl-2.0-standalone.html
