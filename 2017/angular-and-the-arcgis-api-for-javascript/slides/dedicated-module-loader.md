#`Dedicated Module Loader`

### Example usage - Angular + webpack
* Use [esriLoader](https://github.com/tomwayson/esri-loader) or [angular2-esri-loader](https://github.com/tomwayson/angular2-esri-loader)
* Inject ArcGIS JS API as a [script tag](https://github.com/tomwayson/esri-loader/blob/master/index.ts#L21-L37)
* Thin wrapper around global `require()`
* Allows for lazy loading ArcGIS Modules

---

#`Dedicated Module Loader`

![](./reveal.js/img/dedicated_loader.jpg) <!-- .element: style="height: 600px;" -->

---

#`Dedicated Module Loader`

### Examples
### [https://github.com/Esri/angular-esri-map](https://github.com/Esri/angular-esri-map)
### [https://github.com/tomwayson/esri-loader](https://github.com/tomwayson/esri-loader)

---

#`Dedicated Module Loader`

### Advantages
* Sandboxes ArcGIS module dependencies
* Only load ArcGIS modules on routes that require it

---

#`Dedicated Module Loader`

### Challenges
* Uses global `require()`
* Requires knowledge about ArcGIS JS API mobule loading
* Can't use ES6 import statements
