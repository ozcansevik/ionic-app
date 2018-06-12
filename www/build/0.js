webpackJsonp([0],{

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailDuringModule", function() { return DetailDuringModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_during__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_map_map_component_module__ = __webpack_require__(707);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DetailDuringModule = (function () {
    function DetailDuringModule() {
    }
    DetailDuringModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detail_during__["a" /* DetailDuring */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_map_map_component_module__["a" /* MapComponentModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail_during__["a" /* DetailDuring */]),
            ],
        })
    ], DetailDuringModule);
    return DetailDuringModule;
}());

//# sourceMappingURL=detail-during.module.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_map_map_component__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_agm_direction__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_agm_direction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_agm_direction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MapComponentModule = (function () {
    function MapComponentModule() {
    }
    MapComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__components_map_map_component__["a" /* MapComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__agm_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBXXqdX00iR_GUjnBjQ5ptsbc6LJzII_lg'
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3_agm_direction__["AgmDirectionModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__components_map_map_component__["a" /* MapComponent */]
            ]
        })
    ], MapComponentModule);
    return MapComponentModule;
}());

//# sourceMappingURL=map-component.module.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = (function () {
    function MapComponent(navCtrl, navParams, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.watch = null;
        this.useDirection = true;
        this.dirs = [];
        this.urlBlueMarker = "../../assets/icon/blue_marker.png";
        this.renderOpts = {
            suppressMarkers: true,
        };
    }
    MapComponent.prototype.changeMode = function () {
        this.useDirection = !this.useDirection;
    };
    MapComponent.prototype.ngOnInit = function () {
        /* this.watch = this.geolocation.watchPosition();
         this.watch.subscribe((data) => {
           // data can be a set of coordinates, or an error (if an error occurred).
           this.current_latitude = data.coords.latitude;
           this.current_longitude = data.coords.longitude;
          
         });*/
        if (this.markers) {
            console.log('construct dir');
            for (var i = 0; i <= this.markers.length - 2; i++) {
                var dir = {
                    origin: { lat: this.markers[i].latitude, lng: this.markers[i].longitude },
                    destination: { lat: this.markers[i + 1].latitude, lng: this.markers[i + 1].longitude },
                    travelMode: "WALKING"
                };
                this.dirs.push(dir);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MapComponent.prototype, "currentLatitude", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MapComponent.prototype, "currentLongitude", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "markers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MapComponent.prototype, "navigationMode", void 0);
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'map-component',template:/*ion-inline-start:"C:\Users\ozcan\Desktop\ionic-app\src\components\map\map-component.html"*/'<div>\n<agm-map [latitude]="currentLatitude" [longitude]="currentLongitude">\n  <agm-marker [latitude]="currentLatitude" [longitude]="currentLongitude"></agm-marker>\n  <agm-marker *ngFor="let m of markers"\n             [label]="{\n                      color: \'white\',\n                      fontWeight: \'bold\',\n                      text: m.number\n                      }"\n             [iconUrl]="urlBlueMarker"  [latitude]="m.latitude" [longitude]="m.longitude"></agm-marker>\n\n  <span *ngIf="!useDirection">\n     <agm-polyline \n       [visible]="true"\n       [strokeWeight]="3"\n       [strokeColor]="\'#062181\'">\n        <agm-polyline-point\n          *ngFor="let coordinate of markers; let i=index"\n          [latitude]="coordinate.latitude"\n          [longitude]="coordinate.longitude">\n\n        </agm-polyline-point>\n      </agm-polyline></span>\n    <span *ngIf="useDirection">\n    <agm-direction  *ngFor="let dir of dirs" [renderOptions]="renderOpts" [origin]="dir.origin" [destination]="dir.destination"></agm-direction>\n    </span>\n\n</agm-map>\n\n<button *ngIf="navigationMode" ion-button round class="direction_button" [ngClass]="{\'useDirection\' : !useDirection}" (click)="changeMode()">Direction</button>\n\n</div>'/*ion-inline-end:"C:\Users\ozcan\Desktop\ionic-app\src\components\map\map-component.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _c || Object])
    ], MapComponent);
    return MapComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=map-component.js.map

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(1), __webpack_require__(367)) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@agm/core'], factory) :
	(factory((global['agm-direction'] = {}),global.core,global.core$1));
}(this, (function (exports,core,core$1) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AgmDirection = (function () {
    function AgmDirection(gmapsApi) {
        this.gmapsApi = gmapsApi;
        this.travelMode = 'DRIVING';
        this.transitOptions = undefined;
        this.drivingOptions = undefined;
        this.waypoints = [];
        this.optimizeWaypoints = true;
        this.provideRouteAlternatives = false;
        this.avoidHighways = false;
        this.avoidTolls = false;
        this.visible = true;
        this.onChange = new core.EventEmitter();
        this.directionsService = undefined;
        this.directionsDisplay = undefined;
        this.isFirstChange = true;
        this.originMarker = undefined;
        this.destinationMarker = undefined;
    }
    /**
     * @return {?}
     */
    AgmDirection.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.directionDraw();
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    AgmDirection.prototype.ngOnChanges = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        /**
             * When visible is false then remove the direction layer
             */
        if (!this.visible) {
            try {
                if (typeof this.originMarker !== 'undefined') {
                    this.originMarker.setMap(null);
                    this.destinationMarker.setMap(null);
                }
                this.directionsDisplay.setPanel(null);
                this.directionsDisplay.setMap(null);
                this.directionsDisplay = undefined;
            }
            catch (/** @type {?} */ e) { }
        }
        else {
            if (this.isFirstChange) {
                this.isFirstChange = false;
                return;
            }
            /**
                   * When renderOptions are not first change then reset the display
                   */
            if (typeof obj.renderOptions !== 'undefined') {
                if (obj.renderOptions.firstChange === false) {
                    if (typeof this.originMarker !== 'undefined') {
                        this.originMarker.setMap(null);
                        this.destinationMarker.setMap(null);
                    }
                    this.directionsDisplay.setPanel(null);
                    this.directionsDisplay.setMap(null);
                    this.directionsDisplay = undefined;
                }
            }
            this.directionDraw();
        }
    };
    /**
     * This event is fired when the user creating or updating this direction
     * @return {?}
     */
    AgmDirection.prototype.directionDraw = /**
     * This event is fired when the user creating or updating this direction
     * @return {?}
     */
    function () {
        var _this = this;
        this.gmapsApi.getNativeMap().then(function (map) {
            if (typeof _this.directionsDisplay === 'undefined') {
                _this.directionsDisplay = new google.maps.DirectionsRenderer(_this.renderOptions);
                _this.directionsDisplay.setMap(map);
                _this.directionsDisplay.addListener('directions_changed', function () {
                    // #18 issue - listener for dragable routes
                    // #18 issue - listener for dragable routes
                    _this.onChange.emit(_this.directionsDisplay.getDirections());
                });
            }
            if (typeof _this.directionsService === 'undefined') {
                _this.directionsService = new google.maps.DirectionsService;
            }
            if (typeof _this.panel === 'undefined') {
                _this.directionsDisplay.setPanel(null);
            }
            else {
                _this.directionsDisplay.setPanel(_this.panel);
            }
            _this.directionsService.route({
                origin: _this.origin,
                destination: _this.destination,
                travelMode: _this.travelMode,
                transitOptions: _this.transitOptions,
                drivingOptions: _this.drivingOptions,
                waypoints: _this.waypoints,
                optimizeWaypoints: _this.optimizeWaypoints,
                provideRouteAlternatives: _this.provideRouteAlternatives,
                avoidHighways: _this.avoidHighways,
                avoidTolls: _this.avoidTolls,
            }, function (response, status) {
                if (status === 'OK') {
                    _this.directionsDisplay.setDirections(response);
                    /**
                               * Emit The DirectionsResult Object
                               * https://developers.google.com/maps/documentation/javascript/directions?hl=en#DirectionsResults
                               */
                    // Custom Markers
                    if (typeof _this.markerOptions !== 'undefined') {
                        try {
                            if (typeof _this.originMarker !== 'undefined') {
                                google.maps.event.clearListeners(_this.originMarker, 'click');
                                _this.originMarker.setMap(null);
                            }
                            if (typeof _this.destinationMarker !== 'undefined') {
                                google.maps.event.clearListeners(_this.destinationMarker, 'click');
                                _this.destinationMarker.setMap(null);
                            }
                        }
                        catch (/** @type {?} */ err) {
                            console.error('Can not reset custom marker.', err);
                        }
                        var /** @type {?} */ _route = response.routes[0].legs[0];
                        // Origin Marker
                        try {
                            _this.markerOptions.origin.map = map;
                            _this.markerOptions.origin.position = _route.start_location;
                            _this.originMarker = _this.setMarker(map, _this.originMarker, _this.markerOptions.origin, _route.start_address);
                            // Destination Marker
                            // Destination Marker
                            _this.markerOptions.destination.map = map;
                            _this.markerOptions.destination.position = _route.end_location;
                            _this.destinationMarker = _this.setMarker(map, _this.destinationMarker, _this.markerOptions.destination, _route.end_address);
                        }
                        catch (/** @type {?} */ err) {
                            console.error('MarkerOptions error.', err);
                        }
                    }
                }
            });
        });
    };
    /**
     * Custom Origin and Destination Icon
     *
     * \@memberof AgmDirection
     * @param {?} map
     * @param {?} marker
     * @param {?} markerOpts
     * @param {?} content
     * @return {?}
     */
    AgmDirection.prototype.setMarker = /**
     * Custom Origin and Destination Icon
     *
     * \@memberof AgmDirection
     * @param {?} map
     * @param {?} marker
     * @param {?} markerOpts
     * @param {?} content
     * @return {?}
     */
    function (map, marker, markerOpts, content) {
        var /** @type {?} */ infowindow = new google.maps.InfoWindow({
            content: content,
        });
        marker = new google.maps.Marker(markerOpts);
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
        return marker;
    };
    AgmDirection.decorators = [
        { type: core.Directive, args: [{
                    selector: 'agm-direction'
                },] },
    ];
    /** @nocollapse */
    AgmDirection.ctorParameters = function () { return [
        { type: core$1.GoogleMapsAPIWrapper, },
    ]; };
    AgmDirection.propDecorators = {
        "origin": [{ type: core.Input },],
        "destination": [{ type: core.Input },],
        "travelMode": [{ type: core.Input },],
        "transitOptions": [{ type: core.Input },],
        "drivingOptions": [{ type: core.Input },],
        "waypoints": [{ type: core.Input },],
        "optimizeWaypoints": [{ type: core.Input },],
        "provideRouteAlternatives": [{ type: core.Input },],
        "avoidHighways": [{ type: core.Input },],
        "avoidTolls": [{ type: core.Input },],
        "renderOptions": [{ type: core.Input },],
        "visible": [{ type: core.Input },],
        "panel": [{ type: core.Input },],
        "markerOptions": [{ type: core.Input },],
        "onChange": [{ type: core.Output },],
    };
    return AgmDirection;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AgmDirectionModule = (function () {
    function AgmDirectionModule() {
    }
    /**
     * @return {?}
     */
    AgmDirectionModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: AgmDirectionModule,
        };
    };
    AgmDirectionModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [],
                    declarations: [
                        AgmDirection,
                    ],
                    exports: [
                        AgmDirection,
                    ]
                },] },
    ];
    return AgmDirectionModule;
}());

exports.AgmDirectionModule = AgmDirectionModule;
exports.AgmDirection = AgmDirection;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailDuring; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hiking_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DetailDuring page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailDuring = (function () {
    function DetailDuring(navCtrl, navParams, hikingService, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hikingService = hikingService;
        this.geolocation = geolocation;
        this.hiking = this.hikingService.getSelectedHiking();
    }
    DetailDuring.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailDuring');
    };
    DetailDuring.prototype.navPop = function () {
        if (this.navCtrl.getPrevious() != null) {
            this.navCtrl.pop();
        }
    };
    DetailDuring.prototype.ionViewDidEnter = function () {
        var _this = this;
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            // data can be a set of coordinates, or an error (if an error occurred).
            _this.current_latitude = data.coords.latitude;
            _this.current_longitude = data.coords.longitude;
        });
    };
    DetailDuring = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detail-during',template:/*ion-inline-start:"C:\Users\ozcan\Desktop\ionic-app\src\pages\detail-during\detail-during.html"*/'<!--\n  Generated template for the DetailDuring page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div *ngIf="hiking">\n\n    <div class="navbar">\n      <button (click)="navPop()"><ion-icon name="arrow-back"></ion-icon></button>\n      <div class="header_div">\n        <h1>{{hiking.name}}</h1>\n        <div>{{hiking.duree}}</div>\n      </div>\n    </div>\n\n    <div class="map_div">\n      <map-component [navigationMode]="true" [currentLatitude]="current_latitude" [currentLongitude]="current_longitude" [markers]="hiking.steps"></map-component>\n    </div>\n\n    <div class="step_div">\n      <h1>Steps</h1>\n\n      <ion-list>\n        <div class="step" *ngFor="let step of hiking.steps">\n          <div class="number">{{step.number}}</div>\n          <div>{{step.description}}</div>\n        </div>\n      </ion-list>\n\n    </div>\n\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\ozcan\Desktop\ionic-app\src\pages\detail-during\detail-during.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_hiking_service__["a" /* HikingService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], DetailDuring);
    return DetailDuring;
}());

//# sourceMappingURL=detail-during.js.map

/***/ })

});
//# sourceMappingURL=0.js.map