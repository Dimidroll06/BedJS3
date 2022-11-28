import { Layer } from "./Layer";
import { Vector2 } from "./Vector2";

class BedJS {

    
    canvas = document.createElement('canvas');
    ctx = this.canvas.getContext('2d');
    layers = { layer0: new Layer(this) }

    /**
     * Creates an instance of BedJS.
     * @author Dimidroll
     * @date 24/11/2022
     * @param {HTMLCanvasElement} canvas
     * @param {Number} width
     * @param {Number} height
     * @memberof BedJS
     */
    constructor(canvas, width = canvas.width, height = canvas.height) {
        this.canvas = canvas ?? this.canvas;
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext('2d');
    }


    draw(){
        for (const layerName in this.layers) {
            if (Object.hasOwnProperty.call(this.layers, layerName)) {
                /** @type {Layer} */
                const curLayer = this.layers[layerName];
                curLayer._draw(this.ctx);
            }
        }
    }

    get width() { return this.canvas.width }
    set width(w) { this.canvas.width = w; }

    get height() { return this.canvas.height }
    set height(h) { this.canvas.height = h; }

    get size() { return new Vector2(this.width, this.height) }
    set size(v) { this.width = v.x; this.height = v.y; }
}


export { BedJS }