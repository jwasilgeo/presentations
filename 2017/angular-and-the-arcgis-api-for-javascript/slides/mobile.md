# `Going mobile!`

---

# `Ionic 2 and ArcGIS JS API`

## Uses `esriLoader` pattern

### [https://github.com/andygup/ionic2-esri-map](https://github.com/andygup/ionic2-esri-map)

---

# `Cordova and the ArcGIS JS API`

### Init, Require and Load pattern

* Load JS API and CSS via script tag or host locally
* Wait for `onDeviceReady` event
* Use global `require()` like normal

[https://github.com/Esri/quickstart-map-phonegap](https://github.com/Esri/quickstart-map-phonegap)

---

# `Cordova and the ArcGIS JS API`

```
    document.addEventListener("deviceready", onDeviceReady, false);
    
    
    function onDeviceReady(){
        require(["esri/map", "dojo/domReady!"],
            function(Map) {
    
                // Create map
                var map = new Map("mapDiv",{
                    basemap: "dark-gray",
                    center: [-98.58, 39.82],
                    zoom: 3
                });
    
                map.on("load",function(evt) {
                    console.log("Map loaded");
                })
            }
        );
    }


```