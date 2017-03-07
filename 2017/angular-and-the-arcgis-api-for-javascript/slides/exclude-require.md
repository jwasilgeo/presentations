# Pattern 2: Exclude and Require

---

#`Exclude and Require`

### Example usage - Angular + webpack
* Configure module loader to [exclude ArcGIS Dojo Modules](https://gist.github.com/gund/6b22d5ffae42849252abc9a689eb656d#file-webpack-config-js-L10-L24)
* Configure module loader to [output AMD bundles](https://gist.github.com/gund/6b22d5ffae42849252abc9a689eb656d#file-webpack-config-js-L1-L8)
* Load ArcGIS JS API via script tag
* Use ArcGIS JS API Dojo loader to `require()`

---

#`Exclude and Require`

![](./reveal.js/img/exclude_require.jpg) <!-- .element: style="height: 600px;" -->

[Thanks to &nbsp; ![Tom Wayson](https://avatars2.githubusercontent.com/u/662944?v=3&s=50)](http://tomwayson.com/2016/11/27/using-the-arcgis-api-for-javascript-in-applications-built-with-webpack/)  <!-- .element: style="display: inline-flex; align-items: center; font-size: 0.7em; font-style: italic;" -->

---

#`Exclude and Require`

### Advantages:
* Use can use ES2015 imports and commonjs pattern

```javascript

    // commonjs - import AMD and commonjs modules
    import Search = require('esri/dijit/Search'); 
   
    // ES2015 (a.k.a ES6)
    import {LegendOptions} from "esri"; // ES2015:   

```

[//]: # "Reference 1: http://wiki.commonjs.org/wiki/Modules/1.1 "
[//]: # "Reference 2: http://www.ecma-international.org/ecma-262/6.0/#sec-imports "


* No need for async callbacks or Promises to load ArcGIS modules

---

#`Exclude and Require`

### Challenges

* Can introduce map loading delays
* Also uses global `require()`

---

#`Exclude and Require`

### Examples
* [https://github.com/tomwayson/angular2-esri-example](https://github.com/tomwayson/angular2-esri-example)
* [https://github.com/lobsteropteryx/esri-webpack-typescript](https://github.com/lobsteropteryx/esri-webpack-typescript)
