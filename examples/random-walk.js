// @ts-check

import * as framework from "../framework.js" 

console.log(framework.canvas)

let pen = {
    x: 100/2,
    y: 100/2
}

function animate() {
    circle(pen.x, pen.y, 3)
    pen = random([
        {x: pen.x+1, y: pen.y},
        {x: pen.x-1, y: pen.y},
        {x: pen.x, y: pen.y+1},
        {x: pen.x, y: pen.y-1}
    ])
}