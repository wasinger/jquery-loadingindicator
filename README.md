jquery.loading_indicator
========================

A Plugin for jQuery that defines a general interface for showing loading indicators (e.g. spinners) on an element of an HTML page.

It's purpose is to define a common API for Javascript modules or libraries to mark an element as "loading". The concrete implementation of the loading indicator is left up to the author of the application or web page using the module.


Usage:
------

In a jQuery Plugin or other JS module that wants to mark an element as "loading":

```javascript
// to start indicating that the element is loading
$('.my-selector').loading_indicator(); 

// to stop indicating that the element is loading
$('.my-selector').loading_indicator('stop');
```

In a webapp using this jQuery Plugin or module you need to implement two functions for starting or stopping the loading indication using your favorite animation plugin:

```javascript
$.loading_indicator.startfunction = function($e) {
    $e.my_fancy_spinner('show');
};
$.loading_indicator.stopfunction = function($e) {
    $e.my_fancy_spinner('hide');
};
```

