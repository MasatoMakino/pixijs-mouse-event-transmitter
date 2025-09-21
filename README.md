# pixijs-mouse-event-transmitter

> Transmit mouse events from pixi.js stage to other canvas.

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![CI](https://github.com/MasatoMakino/pixijs-mouse-event-transmitter/actions/workflows/ci.yml/badge.svg)](https://github.com/MasatoMakino/pixijs-mouse-event-transmitter/actions/workflows/ci.yml)

[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=MasatoMakino&repo=pixijs-mouse-event-transmitter)](https://github.com/MasatoMakino/pixijs-mouse-event-transmitter)

## Demo

[Demo Page](https://masatomakino.github.io/pixijs-mouse-event-transmitter/demo/)

## API

[API document](https://masatomakino.github.io/pixijs-mouse-event-transmitter/api/)

## Getting Started

### Install

pixijs-mouse-event-transmitter depend on [pixi.js](https://github.com/pixijs/pixi.js)

```bash
npm install pixi.js --save-dev
```

and

```bash
npm install @masatomakino/pixijs-mouse-event-transmitter --save-dev
```

### Import

pixijs-mouse-event-transmitter is composed of ES modules and TypeScript d.ts files.

At first, import classes.

```js
import { MouseEventTransmitter } from "@masatomakino/pixijs-mouse-event-transmitter";

const transmitter = new MouseEventTransmitter({
  transmitTarget: canvas, // transmitter target ( dom element )
  app: app, // app instance of pixi.js
});

canvas.addEventListener("pointermove", (e) => {
  console.log(e);
});
```
