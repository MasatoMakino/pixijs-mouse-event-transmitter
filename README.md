# pixijs-mouse-event-transmitter

Transmit mouse events from pixi.js stage to other canvas.

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

[Github repository](https://github.com/MasatoMakino/pixijs-mouse-event-transmitter)

## Demo

[Demo Page](https://masatomakino.github.io/pixijs-mouse-event-transmitter/demo/)

## Getting Started

### Install

pixijs-mouse-event-transmitter depend on [pixi.js](https://github.com/pixijs/pixi.js)

```bash
npm install pixi.js --save-dev
```

and

```bash
npm install https://github.com/MasatoMakino/pixijs-mouse-event-transmitter.git --save-dev
```

### Import

pixijs-mouse-event-transmitter is composed of ES6 modules and TypeScript d.ts files.

At first, import classes.

```js
import { MouseEventTransmitter } from "pixijs-mouse-event-transmitter";

const transmitter = new MouseEventTransmitter({
  transmitTarget: canvas, // transmitter target ( dom element )
  app: app // app instance of pixi.js
});

canvas.addEventListener("mousemove", e => {
  console.log(e);
});
```
