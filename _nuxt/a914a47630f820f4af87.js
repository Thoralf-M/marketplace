(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{395:function(t,e,n){"use strict";n.r(e),n.d(e,"capitalizeFirstLetter",(function(){return l})),n.d(e,"collectionCleaner",(function(){return h})),n.d(e,"debounce",(function(){return r})),n.d(e,"findRealParent",(function(){return f})),n.d(e,"optionsMerger",(function(){return d})),n.d(e,"propsBinder",(function(){return c})),n.d(e,"CircleMixin",(function(){return y})),n.d(e,"ControlMixin",(function(){return m})),n.d(e,"GridLayerMixin",(function(){return O})),n.d(e,"ImageOverlayMixin",(function(){return v})),n.d(e,"InteractiveLayerMixin",(function(){return C})),n.d(e,"LayerMixin",(function(){return L})),n.d(e,"LayerGroupMixin",(function(){return S})),n.d(e,"OptionsMixin",(function(){return j})),n.d(e,"PathMixin",(function(){return T})),n.d(e,"PolygonMixin",(function(){return P})),n.d(e,"PolylineMixin",(function(){return N})),n.d(e,"PopperMixin",(function(){return A})),n.d(e,"TileLayerMixin",(function(){return x})),n.d(e,"TileLayerWMSMixin",(function(){return B})),n.d(e,"LCircle",(function(){return $.a})),n.d(e,"LCircleMarker",(function(){return M.a})),n.d(e,"LControl",(function(){return w.a})),n.d(e,"LControlAttribution",(function(){return R.a})),n.d(e,"LControlLayers",(function(){return F.a})),n.d(e,"LControlScale",(function(){return D.a})),n.d(e,"LControlZoom",(function(){return z.a})),n.d(e,"LFeatureGroup",(function(){return k.a})),n.d(e,"LGeoJson",(function(){return E.a})),n.d(e,"LGridLayer",(function(){return I})),n.d(e,"LIcon",(function(){return _.a})),n.d(e,"LIconDefault",(function(){return W.a})),n.d(e,"LImageOverlay",(function(){return U.a})),n.d(e,"LLayerGroup",(function(){return G.a})),n.d(e,"LMap",(function(){return K.a})),n.d(e,"LMarker",(function(){return X.a})),n.d(e,"LPolygon",(function(){return Z.a})),n.d(e,"LPolyline",(function(){return H.a})),n.d(e,"LPopup",(function(){return Q.a})),n.d(e,"LRectangle",(function(){return Y.a})),n.d(e,"LTileLayer",(function(){return tt.a})),n.d(e,"LTooltip",(function(){return et.a})),n.d(e,"LWMSTileLayer",(function(){return it.a}));var o=n(1),r=function(t,time){var e;return function(){for(var n=[],o=arguments.length;o--;)n[o]=arguments[o];var r=this;e&&clearTimeout(e),e=setTimeout((function(){t.apply(r,n),e=null}),time)}},l=function(t){return t&&"function"==typeof t.charAt?t.charAt(0).toUpperCase()+t.slice(1):t},c=function(t,e,n,r){var c=function(r){var c="set"+l(r),h=n[r].type===Object||n[r].type===Array||Array.isArray(n[r].type);n[r].custom&&t[c]?t.$watch(r,(function(e,n){t[c](e,n)}),{deep:h}):"setOptions"===c?t.$watch(r,(function(t,n){Object(o.setOptions)(e,t)}),{deep:h}):e[c]&&t.$watch(r,(function(t,n){e[c](t)}),{deep:h})};for(var h in n)c(h)},h=function(t){var e={};for(var n in t){var o=t[n];null!=o&&(e[n]=o)}return e},d=function(t,e){var n=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var o=h(n);t=h(t);var r=e.$options.props;for(var l in t){var c=r[l]?r[l].default:Symbol("unique");o[l]&&c!==t[l]?(console.warn(l+" props is overriding the value passed in the options props"),o[l]=t[l]):o[l]||(o[l]=t[l])}return o},f=function(t){for(var e=!1;t&&!e;)void 0===t.mapObject?t=t.$parent:e=!0;return t},y={mixins:[{mixins:[{props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(t,e){this.$parent.mapObject.attributionControl.removeAttribution(e).addAttribution(t)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(t){this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var t=this.mapObject?this.mapObject.getTooltip():null;t&&t.unbindTooltip()},unbindPopup:function(){var t=this.mapObject?this.mapObject.getPopup():null;t&&t.unbindPopup()},updateVisibleProp:function(t){this.$emit("update:visible",t)}}},{props:{interactive:{type:Boolean,default:!0},bubblingMouseEvents:{type:Boolean,default:!0}},mounted:function(){this.interactiveLayerOptions={interactive:this.interactive,bubblingMouseEvents:this.bubblingMouseEvents}}}],props:{lStyle:{type:Object,custom:!0,default:null},stroke:{type:Boolean,custom:!0,default:!0},color:{type:String,custom:!0,default:"#3388ff"},weight:{type:Number,custom:!0,default:3},opacity:{type:Number,custom:!0,default:1},lineCap:{type:String,custom:!0,default:"round"},lineJoin:{type:String,custom:!0,default:"round"},dashArray:{type:String,custom:!0,default:null},dashOffset:{type:String,custom:!0,default:null},fill:{type:Boolean,custom:!0,default:!1},fillColor:{type:String,custom:!0,default:"#3388ff"},fillOpacity:{type:Number,custom:!0,default:.2},fillRule:{type:String,custom:!0,default:"evenodd"},className:{type:String,custom:!0,default:null}},mounted:function(){if(this.pathOptions=Object.assign({},this.layerOptions,this.interactiveLayerOptions,{stroke:this.stroke,color:this.color,weight:this.weight,opacity:this.opacity,lineCap:this.lineCap,lineJoin:this.lineJoin,dashArray:this.dashArray,dashOffset:this.dashOffset,fill:this.fill,fillColor:this.fillColor,fillOpacity:this.fillOpacity,fillRule:this.fillRule,className:this.className}),this.lStyle)for(var style in console.warn("lStyle is deprecated and is going to be removed in the next major version"),this.lStyle)this.pathOptions[style]=this.lStyle[style]},beforeDestroy:function(){this.parentContainer?this.parentContainer.removeLayer(this):console.error("Missing parent container")},methods:{setLStyle:function(t){this.mapObject.setStyle(t)},setStroke:function(t){this.mapObject.setStyle({stroke:t})},setColor:function(t){this.mapObject.setStyle({color:t})},setWeight:function(t){this.mapObject.setStyle({weight:t})},setOpacity:function(t){this.mapObject.setStyle({opacity:t})},setLineCap:function(t){this.mapObject.setStyle({lineCap:t})},setLineJoin:function(t){this.mapObject.setStyle({lineJoin:t})},setDashArray:function(t){this.mapObject.setStyle({dashArray:t})},setDashOffset:function(t){this.mapObject.setStyle({dashOffset:t})},setFill:function(t){this.mapObject.setStyle({fill:t})},setFillColor:function(t){this.mapObject.setStyle({fillColor:t})},setFillOpacity:function(t){this.mapObject.setStyle({fillOpacity:t})},setFillRule:function(t){this.mapObject.setStyle({fillRule:t})},setClassName:function(t){this.mapObject.setStyle({className:t})}}}],props:{fill:{type:Boolean,custom:!0,default:!0},radius:{type:Number,default:null}},mounted:function(){this.circleOptions=Object.assign({},this.pathOptions,{radius:this.radius})}},m={props:{position:{type:String,default:"topright"}},mounted:function(){this.controlOptions={position:this.position}},beforeDestroy:function(){this.mapObject&&this.mapObject.remove()}},O={mixins:[{props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(t,e){this.$parent.mapObject.attributionControl.removeAttribution(e).addAttribution(t)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(t){this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var t=this.mapObject?this.mapObject.getTooltip():null;t&&t.unbindTooltip()},unbindPopup:function(){var t=this.mapObject?this.mapObject.getPopup():null;t&&t.unbindPopup()},updateVisibleProp:function(t){this.$emit("update:visible",t)}}}],props:{pane:{type:String,default:"tilePane"},opacity:{type:Number,custom:!1,default:1},zIndex:{type:Number,default:1},tileSize:{type:Number,default:256},noWrap:{type:Boolean,default:!1}},mounted:function(){this.gridLayerOptions=Object.assign({},this.layerOptions,{pane:this.pane,opacity:this.opacity,zIndex:this.zIndex,tileSize:this.tileSize,noWrap:this.noWrap})}},v={mixins:[{props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(t,e){this.$parent.mapObject.attributionControl.removeAttribution(e).addAttribution(t)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(t){this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var t=this.mapObject?this.mapObject.getTooltip():null;t&&t.unbindTooltip()},unbindPopup:function(){var t=this.mapObject?this.mapObject.getPopup():null;t&&t.unbindPopup()},updateVisibleProp:function(t){this.$emit("update:visible",t)}}},{props:{interactive:{type:Boolean,default:!0},bubblingMouseEvents:{type:Boolean,default:!0}},mounted:function(){this.interactiveLayerOptions={interactive:this.interactive,bubblingMouseEvents:this.bubblingMouseEvents}}}],props:{url:{type:String,custom:!0},bounds:{custom:!0},opacity:{type:Number,custom:!0,default:1},alt:{type:String,default:""},interactive:{type:Boolean,default:!1},crossOrigin:{type:Boolean,default:!1},errorOverlayUrl:{type:String,custom:!0,default:""},zIndex:{type:Number,custom:!0,default:1},className:{type:String,default:""}},mounted:function(){this.imageOverlayOptions=Object.assign({},this.layerOptions,this.interactiveLayerOptions,{opacity:this.opacity,alt:this.alt,interactive:this.interactive,crossOrigin:this.crossOrigin,errorOverlayUrl:this.errorOverlayUrl,zIndex:this.zIndex,className:this.className})},methods:{setOpacity:function(t){return this.mapObject.setOpacity(t)},setUrl:function(t){return this.mapObject.setUrl(t)},setBounds:function(t){return this.mapObject.setBounds(t)},getBounds:function(){return this.mapObject.getBounds()},getElement:function(){return this.mapObject.getElement()},bringToFront:function(){return this.mapObject.bringToFront()},bringToBack:function(){return this.mapObject.bringToBack()}},render:function(){return null}},C={props:{interactive:{type:Boolean,default:!0},bubblingMouseEvents:{type:Boolean,default:!0}},mounted:function(){this.interactiveLayerOptions={interactive:this.interactive,bubblingMouseEvents:this.bubblingMouseEvents}}},L={props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(t,e){this.$parent.mapObject.attributionControl.removeAttribution(e).addAttribution(t)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(t){this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var t=this.mapObject?this.mapObject.getTooltip():null;t&&t.unbindTooltip()},unbindPopup:function(){var t=this.mapObject?this.mapObject.getPopup():null;t&&t.unbindPopup()},updateVisibleProp:function(t){this.$emit("update:visible",t)}}},S={mixins:[{props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(t,e){this.$parent.mapObject.attributionControl.removeAttribution(e).addAttribution(t)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(t){this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var t=this.mapObject?this.mapObject.getTooltip():null;t&&t.unbindTooltip()},unbindPopup:function(){var t=this.mapObject?this.mapObject.getPopup():null;t&&t.unbindPopup()},updateVisibleProp:function(t){this.$emit("update:visible",t)}}}],mounted:function(){this.layerGroupOptions=this.layerOptions},methods:{addLayer:function(t,e){e||this.mapObject.addLayer(t.mapObject),this.parentContainer.addLayer(t,!0)},removeLayer:function(t,e){e||this.mapObject.removeLayer(t.mapObject),this.parentContainer.removeLayer(t,!0)}}},j={props:{options:{type:Object,default:function(){return{}}}}},T={mixins:[{props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(t,e){this.$parent.mapObject.attributionControl.removeAttribution(e).addAttribution(t)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(t){this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var t=this.mapObject?this.mapObject.getTooltip():null;t&&t.unbindTooltip()},unbindPopup:function(){var t=this.mapObject?this.mapObject.getPopup():null;t&&t.unbindPopup()},updateVisibleProp:function(t){this.$emit("update:visible",t)}}},{props:{interactive:{type:Boolean,default:!0},bubblingMouseEvents:{type:Boolean,default:!0}},mounted:function(){this.interactiveLayerOptions={interactive:this.interactive,bubblingMouseEvents:this.bubblingMouseEvents}}}],props:{lStyle:{type:Object,custom:!0,default:null},stroke:{type:Boolean,custom:!0,default:!0},color:{type:String,custom:!0,default:"#3388ff"},weight:{type:Number,custom:!0,default:3},opacity:{type:Number,custom:!0,default:1},lineCap:{type:String,custom:!0,default:"round"},lineJoin:{type:String,custom:!0,default:"round"},dashArray:{type:String,custom:!0,default:null},dashOffset:{type:String,custom:!0,default:null},fill:{type:Boolean,custom:!0,default:!1},fillColor:{type:String,custom:!0,default:"#3388ff"},fillOpacity:{type:Number,custom:!0,default:.2},fillRule:{type:String,custom:!0,default:"evenodd"},className:{type:String,custom:!0,default:null}},mounted:function(){if(this.pathOptions=Object.assign({},this.layerOptions,this.interactiveLayerOptions,{stroke:this.stroke,color:this.color,weight:this.weight,opacity:this.opacity,lineCap:this.lineCap,lineJoin:this.lineJoin,dashArray:this.dashArray,dashOffset:this.dashOffset,fill:this.fill,fillColor:this.fillColor,fillOpacity:this.fillOpacity,fillRule:this.fillRule,className:this.className}),this.lStyle)for(var style in console.warn("lStyle is deprecated and is going to be removed in the next major version"),this.lStyle)this.pathOptions[style]=this.lStyle[style]},beforeDestroy:function(){this.parentContainer?this.parentContainer.removeLayer(this):console.error("Missing parent container")},methods:{setLStyle:function(t){this.mapObject.setStyle(t)},setStroke:function(t){this.mapObject.setStyle({stroke:t})},setColor:function(t){this.mapObject.setStyle({color:t})},setWeight:function(t){this.mapObject.setStyle({weight:t})},setOpacity:function(t){this.mapObject.setStyle({opacity:t})},setLineCap:function(t){this.mapObject.setStyle({lineCap:t})},setLineJoin:function(t){this.mapObject.setStyle({lineJoin:t})},setDashArray:function(t){this.mapObject.setStyle({dashArray:t})},setDashOffset:function(t){this.mapObject.setStyle({dashOffset:t})},setFill:function(t){this.mapObject.setStyle({fill:t})},setFillColor:function(t){this.mapObject.setStyle({fillColor:t})},setFillOpacity:function(t){this.mapObject.setStyle({fillOpacity:t})},setFillRule:function(t){this.mapObject.setStyle({fillRule:t})},setClassName:function(t){this.mapObject.setStyle({className:t})}}},P={mixins:[{mixins:[{mixins:[{props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(t,e){this.$parent.mapObject.attributionControl.removeAttribution(e).addAttribution(t)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(t){this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var t=this.mapObject?this.mapObject.getTooltip():null;t&&t.unbindTooltip()},unbindPopup:function(){var t=this.mapObject?this.mapObject.getPopup():null;t&&t.unbindPopup()},updateVisibleProp:function(t){this.$emit("update:visible",t)}}},{props:{interactive:{type:Boolean,default:!0},bubblingMouseEvents:{type:Boolean,default:!0}},mounted:function(){this.interactiveLayerOptions={interactive:this.interactive,bubblingMouseEvents:this.bubblingMouseEvents}}}],props:{lStyle:{type:Object,custom:!0,default:null},stroke:{type:Boolean,custom:!0,default:!0},color:{type:String,custom:!0,default:"#3388ff"},weight:{type:Number,custom:!0,default:3},opacity:{type:Number,custom:!0,default:1},lineCap:{type:String,custom:!0,default:"round"},lineJoin:{type:String,custom:!0,default:"round"},dashArray:{type:String,custom:!0,default:null},dashOffset:{type:String,custom:!0,default:null},fill:{type:Boolean,custom:!0,default:!1},fillColor:{type:String,custom:!0,default:"#3388ff"},fillOpacity:{type:Number,custom:!0,default:.2},fillRule:{type:String,custom:!0,default:"evenodd"},className:{type:String,custom:!0,default:null}},mounted:function(){if(this.pathOptions=Object.assign({},this.layerOptions,this.interactiveLayerOptions,{stroke:this.stroke,color:this.color,weight:this.weight,opacity:this.opacity,lineCap:this.lineCap,lineJoin:this.lineJoin,dashArray:this.dashArray,dashOffset:this.dashOffset,fill:this.fill,fillColor:this.fillColor,fillOpacity:this.fillOpacity,fillRule:this.fillRule,className:this.className}),this.lStyle)for(var style in console.warn("lStyle is deprecated and is going to be removed in the next major version"),this.lStyle)this.pathOptions[style]=this.lStyle[style]},beforeDestroy:function(){this.parentContainer?this.parentContainer.removeLayer(this):console.error("Missing parent container")},methods:{setLStyle:function(t){this.mapObject.setStyle(t)},setStroke:function(t){this.mapObject.setStyle({stroke:t})},setColor:function(t){this.mapObject.setStyle({color:t})},setWeight:function(t){this.mapObject.setStyle({weight:t})},setOpacity:function(t){this.mapObject.setStyle({opacity:t})},setLineCap:function(t){this.mapObject.setStyle({lineCap:t})},setLineJoin:function(t){this.mapObject.setStyle({lineJoin:t})},setDashArray:function(t){this.mapObject.setStyle({dashArray:t})},setDashOffset:function(t){this.mapObject.setStyle({dashOffset:t})},setFill:function(t){this.mapObject.setStyle({fill:t})},setFillColor:function(t){this.mapObject.setStyle({fillColor:t})},setFillOpacity:function(t){this.mapObject.setStyle({fillOpacity:t})},setFillRule:function(t){this.mapObject.setStyle({fillRule:t})},setClassName:function(t){this.mapObject.setStyle({className:t})}}}],props:{smoothFactor:{type:Number,custom:!0,default:1},noClip:{type:Boolean,custom:!0,default:!1}},data:function(){return{ready:!1}},mounted:function(){this.polyLineOptions=Object.assign({},this.pathOptions,{smoothFactor:this.smoothFactor,noClip:this.noClip})},methods:{setSmoothFactor:function(t){this.mapObject.setStyle({smoothFactor:t})},setNoClip:function(t){this.mapObject.setStyle({noClip:t})},addLatLng:function(t){this.mapObject.addLatLng(t)}}}],props:{fill:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.polygonOptions=this.polyLineOptions},methods:{getGeoJSONData:function(){return this.mapObject.toGeoJSON()}}},N={mixins:[{mixins:[{props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(t,e){this.$parent.mapObject.attributionControl.removeAttribution(e).addAttribution(t)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(t){this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var t=this.mapObject?this.mapObject.getTooltip():null;t&&t.unbindTooltip()},unbindPopup:function(){var t=this.mapObject?this.mapObject.getPopup():null;t&&t.unbindPopup()},updateVisibleProp:function(t){this.$emit("update:visible",t)}}},{props:{interactive:{type:Boolean,default:!0},bubblingMouseEvents:{type:Boolean,default:!0}},mounted:function(){this.interactiveLayerOptions={interactive:this.interactive,bubblingMouseEvents:this.bubblingMouseEvents}}}],props:{lStyle:{type:Object,custom:!0,default:null},stroke:{type:Boolean,custom:!0,default:!0},color:{type:String,custom:!0,default:"#3388ff"},weight:{type:Number,custom:!0,default:3},opacity:{type:Number,custom:!0,default:1},lineCap:{type:String,custom:!0,default:"round"},lineJoin:{type:String,custom:!0,default:"round"},dashArray:{type:String,custom:!0,default:null},dashOffset:{type:String,custom:!0,default:null},fill:{type:Boolean,custom:!0,default:!1},fillColor:{type:String,custom:!0,default:"#3388ff"},fillOpacity:{type:Number,custom:!0,default:.2},fillRule:{type:String,custom:!0,default:"evenodd"},className:{type:String,custom:!0,default:null}},mounted:function(){if(this.pathOptions=Object.assign({},this.layerOptions,this.interactiveLayerOptions,{stroke:this.stroke,color:this.color,weight:this.weight,opacity:this.opacity,lineCap:this.lineCap,lineJoin:this.lineJoin,dashArray:this.dashArray,dashOffset:this.dashOffset,fill:this.fill,fillColor:this.fillColor,fillOpacity:this.fillOpacity,fillRule:this.fillRule,className:this.className}),this.lStyle)for(var style in console.warn("lStyle is deprecated and is going to be removed in the next major version"),this.lStyle)this.pathOptions[style]=this.lStyle[style]},beforeDestroy:function(){this.parentContainer?this.parentContainer.removeLayer(this):console.error("Missing parent container")},methods:{setLStyle:function(t){this.mapObject.setStyle(t)},setStroke:function(t){this.mapObject.setStyle({stroke:t})},setColor:function(t){this.mapObject.setStyle({color:t})},setWeight:function(t){this.mapObject.setStyle({weight:t})},setOpacity:function(t){this.mapObject.setStyle({opacity:t})},setLineCap:function(t){this.mapObject.setStyle({lineCap:t})},setLineJoin:function(t){this.mapObject.setStyle({lineJoin:t})},setDashArray:function(t){this.mapObject.setStyle({dashArray:t})},setDashOffset:function(t){this.mapObject.setStyle({dashOffset:t})},setFill:function(t){this.mapObject.setStyle({fill:t})},setFillColor:function(t){this.mapObject.setStyle({fillColor:t})},setFillOpacity:function(t){this.mapObject.setStyle({fillOpacity:t})},setFillRule:function(t){this.mapObject.setStyle({fillRule:t})},setClassName:function(t){this.mapObject.setStyle({className:t})}}}],props:{smoothFactor:{type:Number,custom:!0,default:1},noClip:{type:Boolean,custom:!0,default:!1}},data:function(){return{ready:!1}},mounted:function(){this.polyLineOptions=Object.assign({},this.pathOptions,{smoothFactor:this.smoothFactor,noClip:this.noClip})},methods:{setSmoothFactor:function(t){this.mapObject.setStyle({smoothFactor:t})},setNoClip:function(t){this.mapObject.setStyle({noClip:t})},addLatLng:function(t){this.mapObject.addLatLng(t)}}},A={props:{content:{type:String,default:null,custom:!0}},mounted:function(){this.popperOptions={}},methods:{setContent:function(t){this.mapObject&&null!=t&&this.mapObject.setContent(t)}},render:function(t){return this.$slots.default?t("div",this.$slots.default):null}},x={mixins:[{mixins:[{props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(t,e){this.$parent.mapObject.attributionControl.removeAttribution(e).addAttribution(t)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(t){this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var t=this.mapObject?this.mapObject.getTooltip():null;t&&t.unbindTooltip()},unbindPopup:function(){var t=this.mapObject?this.mapObject.getPopup():null;t&&t.unbindPopup()},updateVisibleProp:function(t){this.$emit("update:visible",t)}}}],props:{pane:{type:String,default:"tilePane"},opacity:{type:Number,custom:!1,default:1},zIndex:{type:Number,default:1},tileSize:{type:Number,default:256},noWrap:{type:Boolean,default:!1}},mounted:function(){this.gridLayerOptions=Object.assign({},this.layerOptions,{pane:this.pane,opacity:this.opacity,zIndex:this.zIndex,tileSize:this.tileSize,noWrap:this.noWrap})}}],props:{tms:{type:Boolean,default:!1},subdomains:{type:String,default:"abc"},detectRetina:{type:Boolean,default:!1}},mounted:function(){this.tileLayerOptions=Object.assign({},this.gridLayerOptions,{tms:this.tms,subdomains:this.subdomains,detectRetina:this.detectRetina})},render:function(){return null}},B={mixins:[{mixins:[{mixins:[{props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(t,e){this.$parent.mapObject.attributionControl.removeAttribution(e).addAttribution(t)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(t){this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var t=this.mapObject?this.mapObject.getTooltip():null;t&&t.unbindTooltip()},unbindPopup:function(){var t=this.mapObject?this.mapObject.getPopup():null;t&&t.unbindPopup()},updateVisibleProp:function(t){this.$emit("update:visible",t)}}}],props:{pane:{type:String,default:"tilePane"},opacity:{type:Number,custom:!1,default:1},zIndex:{type:Number,default:1},tileSize:{type:Number,default:256},noWrap:{type:Boolean,default:!1}},mounted:function(){this.gridLayerOptions=Object.assign({},this.layerOptions,{pane:this.pane,opacity:this.opacity,zIndex:this.zIndex,tileSize:this.tileSize,noWrap:this.noWrap})}}],props:{tms:{type:Boolean,default:!1},subdomains:{type:String,default:"abc"},detectRetina:{type:Boolean,default:!1}},mounted:function(){this.tileLayerOptions=Object.assign({},this.gridLayerOptions,{tms:this.tms,subdomains:this.subdomains,detectRetina:this.detectRetina})},render:function(){return null}}],props:{layers:{type:String,default:""},styles:{type:String,default:""},format:{type:String,default:"image/jpeg"},transparent:{type:Boolean,custom:!1},version:{type:String,default:"1.1.1"},crs:{default:null},upperCase:{type:Boolean,default:!1}},mounted:function(){this.tileLayerWMSOptions=Object.assign({},this.tileLayerOptions,{layers:this.layers,styles:this.styles,format:this.format,transparent:this.transparent,version:this.version,crs:this.crs,upperCase:this.upperCase})}},$=n(396),M=n(397),w=n(398),R=n(399),F=n(400),D=n(401),z=n(402),k=n(403),E=n(404),J=n(2),V=function(t){var e={};for(var n in t){var o=t[n];null!=o&&(e[n]=o)}return e},script={name:"LGridLayer",mixins:[{mixins:[{props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(t,e){this.$parent.mapObject.attributionControl.removeAttribution(e).addAttribution(t)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(t){this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var t=this.mapObject?this.mapObject.getTooltip():null;t&&t.unbindTooltip()},unbindPopup:function(){var t=this.mapObject?this.mapObject.getPopup():null;t&&t.unbindPopup()},updateVisibleProp:function(t){this.$emit("update:visible",t)}}}],props:{pane:{type:String,default:"tilePane"},opacity:{type:Number,custom:!1,default:1},zIndex:{type:Number,default:1},tileSize:{type:Number,default:256},noWrap:{type:Boolean,default:!1}},mounted:function(){this.gridLayerOptions=Object.assign({},this.layerOptions,{pane:this.pane,opacity:this.opacity,zIndex:this.zIndex,tileSize:this.tileSize,noWrap:this.noWrap})}},{props:{options:{type:Object,default:function(){return{}}}}}],props:{tileComponent:{type:Object,custom:!0,required:!0}},data:function(){return{tileComponents:{}}},computed:{TileConstructor:function(){return J.default.extend(this.tileComponent)}},mounted:function(){var t=this,e=o.GridLayer.extend({}),n=function(t,e){var n=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var o=V(n);t=V(t);var r=e.$options.props;for(var l in t){var c=r[l]?r[l].default:Symbol("unique");o[l]&&c!==t[l]?(console.warn(l+" props is overriding the value passed in the options props"),o[l]=t[l]):o[l]||(o[l]=t[l])}return o}(this.gridLayerOptions,this);this.mapObject=new e(n),o.DomEvent.on(this.mapObject,this.$listeners),this.mapObject.on("tileunload",this.onUnload,this),function(t,e,n,r){var l=function(r){var l,c="set"+((l=r)&&"function"==typeof l.charAt?l.charAt(0).toUpperCase()+l.slice(1):l),h=n[r].type===Object||n[r].type===Array||Array.isArray(n[r].type);n[r].custom&&t[c]?t.$watch(r,(function(e,n){t[c](e,n)}),{deep:h}):"setOptions"===c?t.$watch(r,(function(t,n){Object(o.setOptions)(e,t)}),{deep:h}):e[c]&&t.$watch(r,(function(t,n){e[c](t)}),{deep:h})};for(var c in n)l(c)}(this,this.mapObject,this.$options.props),this.mapObject.createTile=this.createTile,this.parentContainer=function(t){for(var e=!1;t&&!e;)void 0===t.mapObject?t=t.$parent:e=!0;return t}(this.$parent),this.parentContainer.addLayer(this,!this.visible),this.$nextTick((function(){t.$emit("ready",t.mapObject)}))},beforeDestroy:function(){this.parentContainer.removeLayer(this.mapObject),this.mapObject.off("tileunload",this.onUnload),this.mapObject=null},methods:{createTile:function(t){var div=o.DomUtil.create("div"),e=o.DomUtil.create("div");div.appendChild(e);var n=new this.TileConstructor({el:e,parent:this,propsData:{coords:t}}),r=this.mapObject._tileCoordsToKey(t);return this.tileComponents[r]=n,div},onUnload:function(t){var e=this.mapObject._tileCoordsToKey(t.coords);void 0!==this.tileComponents[e]&&(this.tileComponents[e].$destroy(),this.tileComponents[e].$el.remove(),delete this.tileComponents[e])},setTileComponent:function(t){this.mapObject.redraw()}}};"undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var I=function(template,style,script,t,e,n,o,r,l,c){"boolean"!=typeof o&&(l=r,r=o,o=!1);var h,d="function"==typeof script?script.options:script;if(template&&template.render&&(d.render=template.render,d.staticRenderFns=template.staticRenderFns,d._compiled=!0,e&&(d.functional=!0)),t&&(d._scopeId=t),n?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),style&&style.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},d._ssrRegister=h):style&&(h=o?function(t){style.call(this,c(t,this.$root.$options.shadowRoot))}:function(t){style.call(this,r(t))}),h)if(d.functional){var f=d.render;d.render=function(t,e){return h.call(e),f(t,e)}}else{var y=d.beforeCreate;d.beforeCreate=y?[].concat(y,h):[h]}return script}({render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},void 0,script,void 0,!1,void 0,!1,void 0,void 0,void 0),_=n(405),W=n(406),U=n(407),G=n(408),K=n(409),X=n(410),Z=n(411),H=n(412),Q=n(413),Y=n(414),tt=n(415),et=n(416),it=n(417)}}]);