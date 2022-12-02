import { Sprite } from "./Sprite.js";
import { BedJS } from "./bed.js";

export class Layer {
    /**
     * Creates an instance of Layer.
     * @author Dimidroll
     * @date 28/11/2022
     * @param {BedJS} bed
     * @memberof Layer
     */
    constructor(bed) {
        this._bed = bed;

        this._canvas = document.createElement('canvas');
        this._canvas.width = bed.size.x;
        this._canvas.height = bed.size.y;
        this._ctx = this._canvas.getContext('2d');
        /**
         * @type {Array<Sprite>}
         */
        this._sprites = [];
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Sprite} sprite
     * @returns {Layer} 
     * @memberof Layer
     */
    addSprite(sprite) {
        this._sprites.push(sprite);
        return sprite;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Sprite} sprite
     * @returns {Layer} 
     * @memberof Layer
     */
    removeSprite(sprite) {
        if (this._sprites.includes(sprite)) return !!this._sprites.splice(this._sprites.indexOf(sprite), 1);
        return false;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {CanvasRenderingContext2D} ctx
     * @memberof Layer
     */
    _draw(ctx) {
        this._canvas.width = this._bed.size.x;
        this._canvas.height = this._bed.size.y;

        this._sprites.forEach(sprite => {
            ctx.save();
            sprite._draw(ctx);
            ctx.restore();
        });

        ctx.drawImage(this._canvas, 0, 0, this._canvas.width, this._canvas.height);
    }

}