// @ts-check

import * as framework from "./framework.js";

let canvas = document.getElementById("sketchCanvas")

// interesting way to get around ts-check.. hmm
if (canvas instanceof HTMLCanvasElement) {
    let ctx = canvas.getContext("2d");
}
else {
    throw Error("No canvas with id sketchCanvas found!")
}

framework.setCanvas(canvas)
console.log("canvas set")
