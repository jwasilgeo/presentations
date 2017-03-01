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

---

#`Exclude and Require`

### Examples
* [https://github.com/tomwayson/angular2-esri-example](https://github.com/tomwayson/angular2-esri-example)
* [https://github.com/lobsteropteryx/esri-webpack-typescript](https://github.com/lobsteropteryx/esri-webpack-typescript)

---

#`Exclude and Require`

### Advantages:
* Use can use ES2015 imports and commonjs
* No need for async callbacks or Promises to load ArcGIS modules

---

#`Exclude and Require`

### Challenges

* Can introduce map loading delays
* Also uses global `require()`
