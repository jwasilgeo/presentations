# AngularJS (v1) and Esri JSAPI

![](./reveal.js/img/angular1_logo.png) <!-- .element: style="width: 250px;" -->

---

# `angular-esri-map`

## _TODO:_

- DONE _recap and sales pitch of angular-esri-map_

- DONE _production ready, supports Angular1 with JSAPI 3 or 4_

- DONE _Quick Start demo_

- DONE _mention last year's talks_

- _foreshadowing that `esri-loader` came from the `esriLoader` service in this repo_

---

# Who's in charge?

<p> <!-- .element: style="display: flex; align-items: center;" -->
  ![](./reveal.js/img/angular1_logo.png)
  ![](./reveal.js/img/dojo_logo.png)
</p>

---
<!-- .slide: data-background="./reveal.js/img/angular_in_dojo.png" -->

# Don't wrap AngularJS in Dojo <!-- .element: style="margin-top: 42%; padding: 10px; color: white; background: rgba(128, 128, 128, 0.6)" -->

---
<!-- .slide: data-background="./reveal.js/img/jsapi_in_angular.png" -->

# Make JSAPI work in AngularJS <!-- .element: style="margin-top: 42%; padding: 10px; color: white; background: rgba(128, 128, 128, 0.6)" -->

---

# [`angular-esri-map`](https://github.com/esri/angular-esri-map)

![](./reveal.js/img/esri_github.png) <!-- .element: style="border-radius: 100%; box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);" -->

### https://github.com/esri/angular-esri-map

---

# Demo: Quick Start

![](./reveal.js/img/angular-esri-map_quickstart_v2.png)

---

# Demo: Quick Start

```html
<!DOCTYPE html>
<html ng-app="esri-map-example">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">

  <title>AngularJS Esri Quick Start</title>

  <link rel="stylesheet" href="https://js.arcgis.com/4.2/esri/css/main.css">
  <style type="text/css">
    html, body, .esri-view {
      padding: 0;
      margin: 0;
      height: 100%;
      width: 100%;
    }
  </style>
</head>

<body ng-controller="MapController as vm">
  <esri-scene-view
    map="vm.map"
    view-options="{
      scale: 50000000,
      center: [-101.17, 21.78]
    }">
  </esri-scene-view>

  <!-- load Esri JSAPI -->
  <script src="https://js.arcgis.com/4.2/"></script>
  <!-- load AngularJS -->
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.2/angular.js"></script>
  <!-- load angular-esri-map -->
  <script src="https://unpkg.com/angular-esri-map@2"></script>

  <script>
    angular.module('esri-map-example', ['esri.map'])
      .controller('MapController', function(esriLoader) {
        var self = this;
        esriLoader.require(['esri/Map'], function(Map) {
          self.map = new Map({
            basemap: 'streets'
          });
        });
      });
  </script>
</body>
</html>
```

_(directly from [README](https://github.com/Esri/angular-esri-map/blob/master/README.md#quick-start))_

---

# Last year at Dev Summit 2016

</br>

### [Declarative Mapping Applications with AngularJS </br> and the ArcGIS API for JavaScript](http://proceedings.esri.com/library/userconf/devsummit16/papers/dev_int_193.pdf)

</br>

### [ArcGIS API for JavaScript and AngularJS: </br> What's New, What's Next](https://jwasilgeo.github.io/esri-jsapi-and-angular-whats-next-dev-summit-2016)  _([video](http://arcg.is/2lQn5ps))_
