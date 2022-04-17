(()=>{"use strict";var e,t={167:(e,t,n)=>{var o=n(348),i=n(678);const s=()=>{const e=new o.Application({width:640,height:600,backgroundColor:6710886});document.body.appendChild(e.view);const t=new o.Graphics;t.beginFill(16711680).drawRect(0,0,32,32).endFill(),t.hitArea=new o.Rectangle(0,0,32,32),t.position.set(32),t.interactive=!0,e.stage.addChild(t);const n=document.createElement("canvas");n.width=800,n.height=600,document.body.appendChild(n),new i.MouseEventTransmitter({transmitTarget:n,app:e}),n.addEventListener("mousedown",(e=>{console.log(e.type)})),n.addEventListener("mouseup",(e=>{console.log(e.type)})),n.addEventListener("mousemove",(e=>{console.log(e.type)})),n.addEventListener("wheel",(e=>{console.log(e.type)}))};"loading"!==document.readyState?s():document.addEventListener("DOMContentLoaded",s)},921:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MouseEventTransmitter=void 0;var o=n(348),i=function(){function e(e){var t=this;this.isDragging=!1,this.hasStartedDraggingFromTransmitTarget=!1,this.isThrottling=!1,this.skipMouseMovePerFrame=2,this.mouseMoveCounter=0,this.onMouseMove=function(e){t.isThrottling||t.isDragging&&!t.hasStartedDraggingFromTransmitTarget||(t.isThrottling=!0,t.hasStartedDraggingFromTransmitTarget?t.dispatchClone(e):t.onMouseMoveNonDragging(e))},this.onMouseDown=function(e){var n=t.hitTestStage(e);t.isDragging=!0,t.hasStartedDraggingFromTransmitTarget=!n,n||t.dispatchClone(e)},this.onMouseUpLeave=function(e){t.dispatchClone(e),t.isDragging=!1,t.hasStartedDraggingFromTransmitTarget=!1},this.onWheelEvent=function(e){t.hitTestStage(e)||t.dispatchClone(e)},this.transmitTarget=e.transmitTarget,this.interactionManager=e.app.renderer.plugins.interaction,this.canvas=e.app.view,this.start(),o.Ticker.shared.add((function(){t.mouseMoveCounter++,t.mouseMoveCounter%=t.skipMouseMovePerFrame,t.isThrottling=!1}))}return e.prototype.start=function(){this.isListen||(this.canvas.addEventListener("mousemove",this.onMouseMove,!1),this.canvas.addEventListener("mousedown",this.onMouseDown,!1),this.canvas.addEventListener("mouseup",this.onMouseUpLeave,!1),this.canvas.addEventListener("mouseleave",this.onMouseUpLeave,!1),this.canvas.addEventListener("wheel",this.onWheelEvent,!1),this.isListen=!0)},e.prototype.stop=function(){this.isListen&&(this.canvas.removeEventListener("mousemove",this.onMouseMove),this.canvas.removeEventListener("mousedown",this.onMouseDown),this.canvas.removeEventListener("mouseup",this.onMouseUpLeave),this.canvas.removeEventListener("mouseleave",this.onMouseUpLeave),this.canvas.removeEventListener("wheel",this.onWheelEvent),this.isListen=!1)},e.prototype.onMouseMoveNonDragging=function(e){0===this.mouseMoveCounter&&(this.hitTestStage(e)||this.dispatchClone(e))},e.prototype.dispatchClone=function(e){var t=new e.constructor(e.type,e);this.transmitTarget.dispatchEvent(t)},e.prototype.hitTestStage=function(e){return!!this.interactionManager.hitTest(new o.Point(e.offsetX,e.offsetY))},e}();t.MouseEventTransmitter=i},678:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,i)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(921),t)}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}o.m=t,e=[],o.O=(t,n,i,s)=>{if(!n){var r=1/0;for(d=0;d<e.length;d++){for(var[n,i,s]=e[d],a=!0,h=0;h<n.length;h++)(!1&s||r>=s)&&Object.keys(o.O).every((e=>o.O[e](n[h])))?n.splice(h--,1):(a=!1,s<r&&(r=s));if(a){e.splice(d--,1);var u=i();void 0!==u&&(t=u)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,i,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={826:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var i,s,[r,a,h]=n,u=0;if(r.some((t=>0!==e[t]))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(h)var d=h(o)}for(t&&t(n);u<r.length;u++)s=r[u],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},n=self.webpackChunkpixijs_mouse_event_transmitter=self.webpackChunkpixijs_mouse_event_transmitter||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=o.O(void 0,[736],(()=>o(167)));i=o.O(i)})();