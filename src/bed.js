import Layer from "./Layer.js";
import Sprite from "./Sprite.js";
import Vector2 from "./Vector2.js";

class BedJS {

    canvas = document.createElement('canvas');
    ctx = this.canvas.getContext('2d');
    /**
     *
     * @type {{LayerName: Layer}}
     * @author Dimidroll
     * @date 02/12/2022
     * @memberof BedJS
     */
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


    /**
     * Main draw cicle
     * (Make sure you have any layers and sprites on them)
     * @author Dimidroll
     * @date 02/12/2022
     * @memberof BedJS
     */
    draw() {
        this.ctx.clearRect(0, 0, this.size.x, this.size.y)
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

    /**
     * Return layer
     * @author Dimidroll
     * @date 02/12/2022
     * @param {String} layerName
     * @returns {Layer} 
     * @memberof BedJS
     */
    getLayer(layerName) {
        return this.layers[layerName]
    }

    /**
     * Creates an instance of Layer.
     * @author Dimidroll
     * @date 02/12/2022
     * @param {String} layerName
     * @param {Object} layerParams
     * @returns {Layer} 
     * @memberof BedJS
     */
    addLayer(layerName, layerParams) {
        if (!layerName) return;
        if (this.layers[layerName]) return this.layers[layerName];

        this.layers[layerName] = new Layer(this, layerParams);
        return this.layers[layerName];
    }
}


export {
    BedJS,
    Sprite
}