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

* Use [esriLoader](https://github.com/tomwayson/esri-loader) or [angular2-esri-loader](https://github.com/tomwayson/angular2-esri-loader)

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

---

# Dedicated Module Loader

### Examples

### [https://github.com/Esri/angular-esri-map](https://github.com/Esri/angular-esri-map)

### [https://github.com/tomwayson/esri-loader](https://github.com/tomwayson/esri-loader)

---

# Dedicated Module Loader

### Advantages

* Sandboxes ArcGIS module dependencies

* Only load ArcGIS modules on routes that require it

---

# Dedicated Module Loader

### Challenges

* Uses global `require()`

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

---

# Dedicated Module Loader _(Bonus Material)_

### Examples

### [https://github.com/Esri/esri-system-js/#example-applications](https://github.com/Esri/esri-system-js/#example-applications)

### [jwasilgeo/angular2-esri-playground](https://jwasilgeo.github.io/angular2-esri-playground/)
