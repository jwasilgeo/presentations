# Angular (v2+) and Esri JSAPI

![](./reveal.js/img/angular2_whiteTransparent.png) <!-- .element: style="width: 250px;" -->
![](./reveal.js/img/angular2_whiteTransparent.png) <!-- .element: style="width: 250px;" -->
![](./reveal.js/img/angular2_whiteTransparent.png) <!-- .element: style="width: 250px;" -->
![](./reveal.js/img/angular2_whiteTransparent.png) <!-- .element: style="width: 250px;" -->

![](./reveal.js/img/angular2_whiteTransparent.png) <!-- .element: style="width: 250px;" -->
![](./reveal.js/img/angular2_whiteTransparent.png) <!-- .element: style="width: 250px;" -->
![](./reveal.js/img/angular2_whiteTransparent.png) <!-- .element: style="width: 250px;" -->
![](./reveal.js/img/angular2_whiteTransparent.png) <!-- .element: style="width: 250px;" -->
![](./reveal.js/img/angular2_whiteTransparent.png) <!-- .element: style="width: 250px;" -->

---

# Pattern 1: Dedicated Module Loader

---

# Dedicated Module Loader

### Example usage - Angular + webpack

* Use [esri-loader](https://github.com/tomwayson/esri-loader) or [angular2-esri-loader](https://github.com/tomwayson/angular2-esri-loader)

* Injects ArcGIS API for JavaScript as a [script tag](https://github.com/tomwayson/esri-loader/blob/master/index.ts#L21-L37)

* Thin wrapper around global Dojo `require()`

* Allows for lazy loading ArcGIS Modules

<hr class="mini-hr">

<p style="display: inline-flex; align-items: center;">
  ![](./reveal.js/img/angular2_whiteTransparent.png) <!-- .element: style="width: 130px; margin: 0 30px;" -->
  <i class="fa fa-plus fa-lg"></i>
  ![](./reveal.js/img/webpack_logo.png) <!-- .element: style="width: 130px; margin: 0 30px;" -->
</p>

---

# Dedicated Module Loader

![](./reveal.js/img/dedicated_loader.jpg) <!-- .element: style="height: 600px;" -->

[Thanks to &nbsp; ![Tom Wayson](https://avatars2.githubusercontent.com/u/662944?v=3&s=50)](http://tomwayson.com/2016/11/27/using-the-arcgis-api-for-javascript-in-applications-built-with-webpack/)  <!-- .element: style="display: inline-flex; align-items: center; font-size: 0.7em; font-style: italic;" -->

---

# Dedicated Module Loader

### Examples

### [tomwayson/esri-loader#examples](https://github.com/tomwayson/esri-loader#examples)

### [tomwayson/esri-angular-cli-example](https://github.com/tomwayson/esri-angular-cli-example)

### [kgs916/angular2-esri4-components](https://github.com/kgs916/angular2-esri4-components)

### [angular2-esri-loader instructions](https://gist.github.com/jwasilgeo/00855ee002aca822e33abd8a7a031f56) <span style="font-size: 0.6em; vertical-align: middle;">(GitHub Gist)</span>

### [Esri/angular-esri-map](https://github.com/Esri/angular-esri-map)*

<br/>

<br/>

\* The original! And your friend for AngularJS (v1). <!-- .element: style="text-align: right; font-size: 0.65em;" -->

---

# Dedicated Module Loader

### Advantages

* Sandboxes ArcGIS module dependencies

* Only load ArcGIS modules on routes that require it

---

# Dedicated Module Loader

### Challenges

* Uses global Dojo `require()`

* Requires knowledge about ArcGIS module loading

* Can't use ES6 `import` statements

---

# Dedicated Module Loader _(Bonus Material)_

### Example usage - Angular + SystemJS

* Use [esri-system-js](https://github.com/Esri/esri-system-js/)

* Wrapper around SystemJS's `register()` function

* First, load ArcGIS modules with Dojo AMD loader

* Then, register a SystemJS module to expose ArcGIS modules

<hr class="mini-hr">

<p style="display: inline-flex; align-items: center;">
  ![](./reveal.js/img/angular2_whiteTransparent.png) <!-- .element: style="width: 130px; margin: 0 30px;" -->
  <i class="fa fa-plus fa-lg"></i>
  `SystemJS` <!-- .element: style="font-size: 1.75em; margin: 0 30px;" -->
</p>

[Thanks to &nbsp; ![Rene Rubalcava](https://avatars0.githubusercontent.com/u/206462?v=3&s=50)](http://odoe.net/blog/angular-2-with-arcgis-js-api/)  <!-- .element: style="display: inline-flex; align-items: center; font-size: 0.7em; font-style: italic;" -->


---

# Dedicated Module Loader _(Bonus Material)_

### Examples

### [https://github.com/Esri/esri-system-js/#example-applications](https://github.com/Esri/esri-system-js/#example-applications)

### [jwasilgeo/angular2-esri-playground](https://jwasilgeo.github.io/angular2-esri-playground/)
